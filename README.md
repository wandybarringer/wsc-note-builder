# Warhead Note Builder (WSC)

Standardizing communication for WSC.

## Overview

The Warhead Note Builder is a specialized utility designed for Technicians to create clear, professional, and formatted notes for Sales Panel.

The Problem: Sales Panel is the primary hub for client history, yet it lacks built-in formatting tools (no bolding, no bullet points, no headers). This leads to cluttered, hard-to-read text that can cause miscommunication between departments.

The Solution: This tool provides a user-friendly interface that generates clean HTML code based on your inputs. By using this tool, you ensure that every note you leave is structured, readable, and professional, regardless of the Sales Panel’s limitations.

## Key Features

- **Automated Formatting:** Automatically generates <p>, <b>, and <ul> tags so you don't have to write code. This makes your notes clean and easy to read.

- **Dynamic Logic:** The interface changes based on your task. If you select "Missed Appointment," the tool shows fields for phone numbers and voicemail status; if you select "1st Appointment," it shows the training checklist.

- **Persistent Settings:** Your initials are saved to your browser, so you only have to enter them once.

  - **_Note: Initials are stored in Local Storage and will be erased if site-data is cleared_**

- **Phone Masking:** Automatically formats phone numbers into (XXX) XXX-XXXX as you type.

- **One-Click Copy:** A dedicated "Copy Notes" button captures the HTML and provides a visual confirmation, ready to be pasted directly into Sales Panel.

- **Theme Toggle:** Supports both Light and Dark modes to reduce eye strain during long shifts.

- **Responsive Design:** The application can be sized down within the browser if needed for screen space.

## How to Use

1. Choose Your Note Template Type

Use the dropdown menu at the top to select the nature of your note (e.g., 1st Appointment, Missed Appointment, Reschedule, or Warhead Assistance).

2. Fill Out the Form

- Homework: Mark client's progress in their homework.

- Checklists: Click the boxes for topics covered (e.g., Dashboard Navigation, Extra Pages).

- Additional Notes: Use the dedicated text area for custom details.

- Next Steps: Copy and paste the next appointment date, any additional appointments, and additional details depending on the type of call.

3. Review the Preview on the right side panel

The HTML Notes box at the bottom updates in real-time.

- **_Note: This box is Read-Only to prevent accidental deletion of the generated logic._**

4. Copy and Paste

Click Copy HTML Notes. Go to your client's file in the Sales Panel and paste into the notes section.

## Technical Summary for Users

- **Consistency:** Every technician's notes will follow the same professional structure.

- **Speed:** Reduces the time spent manually typing out notes or editing pre-existing templates.

- **Accuracy:** Ensures specific details like business registration progress aren't forgotten.

## Best Practices

- **Use the Side Inputs:** Since the final output box is protected, always use the inputs on the left to add your custom text.

- **Clear Between Clients:** Use the "Clear" button or refresh the page between different templates to ensure variables reset.

- **Initials:** Make sure your initials are set in the settings section so all your work is properly attributed.

## In Development

The following features are currently being explored or are in active development to further improve the technician workflow:

- **Cursor-Aware Manual Injection:** Researching ways to allow technicians to type directly into the generated note without losing progress when updating checkboxes.

- **Note History:** A local session log to quickly retrieve the last few generated notes in case of a browser crash or accidental refresh.

**_Developed to make the Warhead Technician workflow faster, clearer, and more efficient._**
