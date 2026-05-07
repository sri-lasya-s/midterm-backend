require("dotenv").config();

const express = require("express");
const { OpenAPIBackend } = require("openapi-backend");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const cors = require("cors");

const supabase = require("./config/supabase");

const app = express();

app.use(cors());
app.use(express.json());

const api = new OpenAPIBackend({
  definition: path.join(__dirname, "openapi.yaml"),
  validate: true,
});

api.register({

  // GET ALL STUDIES
  StudyService_list: async (c, req, res) => {

    const { data, error } =
      await supabase
      .from("studies")
      .select("*");

    if (error) {
      return res.status(500).json({
        error: error.message
      });
    }

    res.json(data);
  },

  // CREATE STUDY
  StudyService_create: async (c, req, res) => {

    const body = c.request.requestBody;

    const newStudy = {
      id: String(Date.now()),
      ...body
    };

    const { data, error } =
      await supabase
      .from("studies")
      .insert([newStudy])
      .select();

    if (error) {
      return res.status(500).json({
        error: error.message
      });
    }

    res.status(201).json(data[0]);
  },

  // GET STUDY BY ID
  StudyService_get: async (c, req, res) => {

    const id = c.request.params.id;

    const { data, error } =
      await supabase
      .from("studies")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      return res.status(404).json({
        error: "Not found"
      });
    }

    res.json(data);
  },

  // UPDATE STUDY
  StudyService_update: async (c, req, res) => {

    const id = c.request.params.id;

    const body =
      c.request.requestBody;

    const { data, error } =
      await supabase
      .from("studies")
      .update(body)
      .eq("id", id)
      .select();

    if (error) {
      return res.status(500).json({
        error: error.message
      });
    }

    if (!data.length) {
      return res.status(404).json({
        error: "Not found"
      });
    }

    res.json(data[0]);
  },

  // DELETE STUDY
  StudyService_delete: async (c, req, res) => {

    const id = c.request.params.id;

    const { error } =
      await supabase
      .from("studies")
      .delete()
      .eq("id", id);

    if (error) {
      return res.status(500).json({
        error: error.message
      });
    }

    res.json({
      message: "Deleted"
    });
  },

  // ACTIVE STUDIES
  StudyService_active: async (c, req, res) => {

  const { data, error } =
    await supabase
    .from("studies")
    .select("*")
    .eq("status", "Active");

  if (error) {
    return res.status(500).json({
      error: error.message
    });
  }

  res.json(data);
},

  validationFail: (c, req, res) => {

    res.status(400).json({
      error: "Bad Request"
    });
  },

  notFound: (c, req, res) => {

    res.status(404).json({
      error: "Not Found"
    });
  },
});

api.init();


// OPENAPI YAML
app.get("/openapi.yaml", (req, res) => {

  res.setHeader(
    "Content-Type",
    "text/yaml"
  );

  res.send(
    fs.readFileSync(
      path.join(
        __dirname,
        "openapi.yaml"
      ),
      "utf8"
    )
  );
});


// SWAGGER DOCS
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions: {
      url: "/openapi.yaml"
    }
  })
);


// HANDLE API REQUESTS
app.use((req, res) =>
  api.handleRequest(req, req, res)
);


const PORT =
  process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});