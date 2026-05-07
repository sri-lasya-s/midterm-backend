

const API =
  "http://localhost:3000";


// LOAD ALL STUDIES
async function loadStudies() {

  const data =
    await api.studyServiceList();

    console.log(result);


}


// LOAD ACTIVE STUDIES
async function loadActiveStudies() {

  const response =
    await fetch(
      API + "/active-studies"
    );

  const data =
    await response.json();

  renderStudies(data);
}


// CREATE STUDY
async function createStudy() {

  const study = {

    studyTitle:
      document.getElementById(
        "studyTitle"
      ).value,

    method:
      document.getElementById(
        "method"
      ).value,

    participants:
      Number(
        document.getElementById(
          "participants"
        ).value
      ),

    status:
      document.getElementById(
        "status"
      ).value
  };

  await fetch(API, {

    method: "POST",

    headers: {
      "Content-Type":
        "application/json"
    },

    body:
      JSON.stringify(study)
  });

  loadStudies();
}


// GET STUDY BY ID
async function getStudyById() {

  const id =
    document.getElementById(
      "getStudyId"
    ).value;

  if (!id) return;

  const response =
    await fetch(
      API + "/" + id
    );

  const data =
    await response.json();

  renderStudies([data]);
}


// UPDATE STUDY
async function updateStudy() {

  const id =
    document.getElementById(
      "updateId"
    ).value;

  if (!id) return;

  const updatedStudy = {

    studyTitle:
      document.getElementById(
        "updateTitle"
      ).value,

    method:
      document.getElementById(
        "updateMethod"
      ).value,

    participants:
      Number(
        document.getElementById(
          "updateParticipants"
        ).value
      ),

    status:
      document.getElementById(
        "updateStatus"
      ).value
  };

  await fetch(
    API + "/" + id,
    {

      method: "PATCH",

      headers: {
        "Content-Type":
          "application/json"
      },

      body:
        JSON.stringify(
          updatedStudy
        )
    }
  );

  loadStudies();
}


// DELETE STUDY
async function deleteStudy() {

  const id =
    prompt("Enter Study ID");

  if (!id) return;

  await fetch(
    API + "/" + id,
    {
      method: "DELETE"
    }
  );

  loadStudies();
}


// RENDER STUDIES
function renderStudies(studies) {

  const output =
    document.getElementById(
      "output"
    );

  output.innerHTML = "";

  studies.forEach((study) => {

    output.innerHTML += `

      <div class="study">

        <h3>
          ${study.studyTitle}
        </h3>

        <p>
          <strong>ID:</strong>
          ${study.id}
        </p>

        <p>
          Method:
          ${study.method}
        </p>

        <p>
          Participants:
          ${study.participants}
        </p>

        <p>
          Status:
          ${study.status}
        </p>

      </div>
    `;
  });
}