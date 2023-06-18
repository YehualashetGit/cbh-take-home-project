# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Back-end

- Task 1: Add Custom Agent IDs for Facilities
  - Description: add a new column to Facility table to store the custom id for each Agent
  - Acceptance criteria:
    - Update the Facilities table schema to include a field for custom Agent IDs.
  - Implementation details:
    - Update the Facilities table schema in the database to include a new column for custom Agent IDs.
    - add migration to update the database schema
  - Estimated time: 3 hours

- Task 2 :Validate Unique Custom Agent IDs
  - Description: Add validation to ensure that custom Agent IDs are unique within a Facility.
  - Acceptance criteria:
    - POST `/api/facilities/:id/agents` endpoint to save custom Agent IDs.
    - Implement validation logic to check for duplicate custom Agent IDs within a Facility.
    - Return appropriate error responses and prevent duplicates from being saved.

  - Estimated time: 6 hours
  - Implementation details:
    - add POST `/api/facilities/:id/agents` endpoint to save custom Agent IDs.
    - Add validation logic to the API endpoint for saving custom Agent IDs.
    - Check if the custom Agent ID already exists for the Facility and return an error response if a duplicate is detected.
    - Update the saving logic to prevent duplicates from being saved to the database.

- Task 3: Display Custom Agent IDs in Shift Metadata
  - Description: Update the back-end API to include custom Agent IDs in the Shift metadata response.
  - Blocker: *Task 1*
  - Acceptance criteria:
    - GET `/api/facilities/:id/shifts` endpoint to fetch Shifts.
    - Modify the API endpoint for fetching Shifts to include the custom Agent IDs in the response.

  - Estimated time: 3 hours
  - Implementation details:
    - Add GET `/api/facilities/:id/shifts` endpoint to fetch Shifts.
    - Update getShiftsByFacility function to include the custom Agent IDs in the response.

- Task 4: Generate Reports with Custom Agent IDs
  - Description: Update the report generation logic to use custom Agent IDs.
  - Blocker: Task 3
  - Acceptance criteria:
    - Update generateReport function to use custom Agent IDs.
    - Update the report generation view to fetch and display the custom Agent IDs.
    - GET `/api/facilities/:id/reports` endpoint to generate reports and convert them to PDFs.
  - Estimated time: 6 hours

## Front-end

- Task 1: Add Custom Agent IDs for Facilities
  - Description: add a new field to the Facility form to allow Facilities to save custom Agent IDs.
  - Acceptance criteria:
    - Add a new field to the Facility form to allow Facilities to save custom Agent IDs.
    - Update the form submission logic to save the custom Agent IDs to the database.
  - Implementation details:
    - Create a form or input component to capture custom Agent IDs from Facilities.
    - Connect the form to the back-end API to save the custom Agent IDs.
    - Update the report generation view to fetch and display the custom Agent IDs.
  - Estimated time: 8 hours

- Task 2: Generate Reports with Custom Agent IDs
  - Description: Update the report generation logic to use custom Agent IDs.
  - Blocker: Task 1
  - Acceptance criteria:
    - Update the report generation view to fetch and display the custom Agent IDs.
    - Update the report generation logic to use custom Agent IDs.
  - Estimated time: 6 hours
