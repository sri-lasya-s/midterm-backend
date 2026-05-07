
import './style.css'

import DefaultApi
from './generated-client/src/api/DefaultApi.js'

const api =
  new DefaultApi()

api.apiClient.basePath =
  "http://localhost:3000"

document.querySelector('#app').innerHTML = `

  <div class="container">

    <div class="left-panel">

      <h1>
        UX Research Study Tracker
      </h1>

      <h2>Create Study</h2>

      <input
        type="text"
        id="studyTitle"
        placeholder="Study Title"
      />

      <select id="method">

        <option value="Interview">
          Interview
        </option>

        <option value="Survey">
          Survey
        </option>

        <option value="UsabilityTest">
          UsabilityTest
        </option>

      </select>

      <input
        type="number"
        id="participants"
        placeholder="Participants"
      />

      <select id="status">

        <option value="Active">
          Active
        </option>

        <option value="Planned">
          Planned
        </option>

        <option value="Done">
          Done
        </option>

      </select>

      <button id="createBtn">
        Create Study
      </button>

      <h3 id="createMessage"></h3>

      <hr />

      <button id="loadBtn">
        Load All Studies
      </button>

      <button id="activeBtn">
        Load Active Studies
      </button>

      <h3 id="loadMessage"></h3>

      <h2>
        Get Study By ID
      </h2>

      <input
        type="text"
        id="getId"
        placeholder="Enter Study ID"
      />

      <button id="getBtn">
        Get Study
      </button>

      <h3 id="getMessage"></h3>

      <h2>
        Update Study
      </h2>

      <input
        type="text"
        id="updateId"
        placeholder="Study ID"
      />

      <input
        type="text"
        id="updateTitle"
        placeholder="New Title"
      />

      <select id="updateMethod">

        <option value="Interview">
          Interview
        </option>

        <option value="Survey">
          Survey
        </option>

        <option value="UsabilityTest">
          UsabilityTest
        </option>

      </select>

      <input
        type="number"
        id="updateParticipants"
        placeholder="Participants"
      />

      <select id="updateStatus">

        <option value="Active">
          Active
        </option>

        <option value="Planned">
          Planned
        </option>

        <option value="Done">
          Done
        </option>

      </select>

      <button id="updateBtn">
        Update Study
      </button>

      <h3 id="updateMessage"></h3>

      <h2>
        Delete Study
      </h2>

      <input
        type="text"
        id="deleteId"
        placeholder="Enter Study ID"
      />

      <button id="deleteBtn">
        Delete Study
      </button>

      <h3 id="deleteMessage"></h3>

    </div>

    <div id="output"></div>

  </div>

`

document
  .getElementById('loadBtn')
  .addEventListener(
    'click',
    loadStudies
  )

document
  .getElementById('activeBtn')
  .addEventListener(
    'click',
    loadActiveStudies
  )

document
  .getElementById('createBtn')
  .addEventListener(
    'click',
    createStudy
  )

document
  .getElementById('getBtn')
  .addEventListener(
    'click',
    getStudyById
  )

document
  .getElementById('updateBtn')
  .addEventListener(
    'click',
    updateStudy
  )

document
  .getElementById('deleteBtn')
  .addEventListener(
    'click',
    deleteStudy
  )

function renderStudies(studies) {

  const output =
    document.getElementById(
      'output'
    )

  output.innerHTML = ''

  studies.forEach((study) => {

    output.innerHTML += `

      <div class="study-card">

        <h3>
          ${study.studyTitle}
        </h3>

        <p>
          <strong>ID:</strong>
          ${study.id}
        </p>

        <p>
          <strong>Method:</strong>
          ${study.method}
        </p>

        <p>
          <strong>Participants:</strong>
          ${study.participants}
        </p>

        <p>
          <strong>Status:</strong>
          ${study.status}
        </p>

      </div>

    `
  })
}

function loadStudies() {

  api.studyServiceList(

    (error, data, response) => {

      if (error) {

        console.error(error)

        return
      }

      document.getElementById(
        'loadMessage'
      ).innerText =
        'All studies loaded successfully'

      renderStudies(
        response.body
      )
    }
  )
}

function loadActiveStudies() {

  api.studyServiceActive(

    (error, data, response) => {

      if (error) {

        console.error(error)

        return
      }

      document.getElementById(
        'loadMessage'
      ).innerText =
        'Active studies loaded successfully'

      renderStudies(
        response.body
      )
    }
  )
}

function createStudy() {

  const study = {

    studyTitle:
      document.getElementById(
        'studyTitle'
      ).value,

    method:
      document.getElementById(
        'method'
      ).value,

    participants:
      Number(
        document.getElementById(
          'participants'
        ).value
      ),

    status:
      document.getElementById(
        'status'
      ).value
  }

  api.studyServiceCreate(

    study,

    (error, data, response) => {

      if (error) {

        console.error(error)

        return
      }

      document.getElementById(
        'createMessage'
      ).innerText =
        'Study created successfully'

      loadStudies()
    }
  )
}

function getStudyById() {

  const id =
    document.getElementById(
      'getId'
    ).value

  api.studyServiceGet(

    id,

    (error, data, response) => {

      if (error) {

        console.error(error)

        return
      }

      document.getElementById(
        'getMessage'
      ).innerText =
        'Study retrieved successfully'

      renderStudies([
        response.body
      ])
    }
  )
}

function updateStudy() {

  const id =
    document.getElementById(
      'updateId'
    ).value

  const updatedStudy = {

    studyTitle:
      document.getElementById(
        'updateTitle'
      ).value,

    method:
      document.getElementById(
        'updateMethod'
      ).value,

    participants:
      Number(
        document.getElementById(
          'updateParticipants'
        ).value
      ),

    status:
      document.getElementById(
        'updateStatus'
      ).value
  }

  api.studyServiceUpdate(

    id,

    {
      studyUpdate:
        updatedStudy
    },

    (error, data, response) => {

      if (error) {

        console.error(error)

        return
      }

      document.getElementById(
        'updateMessage'
      ).innerText =
        'Study updated successfully'

      getStudyByIdAfterUpdate(id)
    }
  )
}

function getStudyByIdAfterUpdate(id) {

  api.studyServiceGet(

    id,

    (error, data, response) => {

      if (error) {

        console.error(error)

        return
      }

      renderStudies([
        response.body
      ])
    }
  )
}

function deleteStudy() {

  const id =
    document.getElementById(
      'deleteId'
    ).value

  api.studyServiceDelete(

    id,

    (error, data, response) => {

      if (error) {

        console.error(error)

        return
      }

      document.getElementById(
        'deleteMessage'
      ).innerText =
        'Study deleted successfully'

      document.getElementById(
        'output'
      ).innerHTML = ''
    }
  )
}

