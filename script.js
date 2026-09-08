/* =========================================================
   TEDxIGDTUW — BOLLYWOOD CASTING EXPERIENCE
   SCRIPT.JS
   PREFERENCE 1 + PREFERENCE 2
   ========================================================= */

// REPLACE THIS WITH YOUR BACKEND DEVELOPER'S GOOGLE APPS SCRIPT WEB APP URL
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx613pKHKn3KZvBk6ZR-IwKrouwyWV_Y1pbSz5GqBgV2KMwJ7ilVY6QvC_MypZiXZkh/exec";


/* =========================================================
   DOMAIN DATA
   ========================================================= */

const domainData = {

  "Community and Delegate Affairs": {
    icon: "🤝",
    character: "Geet",
    role: "The Crowd Commander",
    tagline:
      "Unshakable warmth, endless energy, and a natural ability to keep 100+ delegates calm when chaos hits.",
    quote:
      "\"Problem kitni bhi badi ho, solution hamesha smile ke saath milta hai!\"",
    scene:
      "Picture 100+ attendees hitting the registration desk at once while a delegate loses their badge. Your scene is all about quick crisis management, zero panic, and making everyone feel at home."
  },

  "Content and Writing": {
    icon: "✍️",
    character: "Bunny",
    role: "The Narrative Architect",
    tagline:
      "Part storyteller, part strategist — crafting captions that stop the scroll and speaker scripts that leave a mark.",
    quote:
      "\"Ek acchi kahani wahi hai jo dimaag mein nahi, seedha dil mein utar jaye.\"",
    scene:
      "Tight deadlines, blank pages, and high stakes. From 2-line viral captions to structuring high-impact TEDx talk scripts, you turn raw ideas into powerful narratives."
  },

  "Events, Brands, and People": {
    icon: "🎤",
    character: "Rancho",
    role: "The Mastermind Showrunner",
    tagline:
      "Calm inside the storm, obsessed with seamless execution, and quick to fix any backstage glitch.",
    quote:
      "\"Execution mein perfection aur situation mein patience — bas yahi chahiye.\"",
    scene:
      "The spotlight is on, the clock is ticking, and a technical glitch occurs mid-stage. You're the one managing the timeline, directing backstage crew, and guaranteeing a flawless audience experience."
  },

  "Media and Communication": {
    icon: "📹",
    character: "Ved",
    role: "The Visual Auteur",
    tagline:
      "Seeing extraordinary frames in ordinary moments, turning standard announcements into viral visual experiences.",
    quote:
      "\"Camera sirf recording nahi karta, feeling capture karta hai.\"",
    scene:
      "Your lens defines the event's legacy. Whether scripting an engaging Reel from a routine update or mediating creative shoot disputes, you capture moments that matter."
  },

  "PR (Public Relations)": {
    icon: "📣",
    character: "Kabir",
    role: "The Strategic Pitcher",
    tagline:
      "Persistent, highly persuasive, and capable of turning a flat 'no' into an event-changing partnership.",
    quote:
      "\"Har rejection bas agle bade deal ka pehla step hota hai.\"",
    scene:
      "Event week is around the corner and registration targets need a boost. You're on the front lines—drafting cold pitches, calling partners, and driving public reach."
  },

  "Creative, Strategy and Design": {
    icon: "🎨",
    character: "Poo",
    role: "The Design Perfectionist",
    tagline:
      "Uncompromising on brand aesthetic, master of design tools, and bold enough to create visual identities from scratch.",
    quote:
      "\"Design aisa hona chahiye ki dekhte hi kehna pade... 'Tell me how it looks!'\"",
    scene:
      "Blank Figma boards, strict guidelines, and last-minute feedback rounds. Your mission is turning conceptual theme briefs into iconic visual assets."
  },

  "Sponsorship and Strategic Alliances": {
    icon: "💼",
    character: "Munna Bhai",
    role: "The Deal Closer",
    tagline:
      "Charming negotiator, value-driven communicator, and master of closing high-value corporate sponsorships.",
    quote:
      "\"Deal wahi acchi jo dono taraf se dil jeet le!\"",
    scene:
      "A major sponsor threatens to walk out 3 days before the show. You step in, pitch unique brand deliverables beyond simple logo placements, and seal the partnership."
  }
};


/* =========================================================
   DOMAIN QUESTIONS
   ========================================================= */

const domainQuestions = {

  "Community and Delegate Affairs": [
    {
      id: "q1",
      label:
        "Tell us about one responsibility or project you have handled before. What was your specific contribution, and what was the outcome?",
      req: true
    },
    {
      id: "q2",
      label:
        "If you are assigned a task with a deadline but realise you may not be able to complete it on time, what would you do?",
      req: true
    },
    {
      id: "q3",
      label:
        "A delegate approaches you with a problem that you do not know how to solve. How would you handle the situation?",
      req: true
    },
    {
      id: "q4",
      label:
        "Imagine 100+ attendees arrive at once and the registration desk becomes chaotic. What would you do to manage the situation?",
      req: true
    },
    {
      id: "q5",
      label:
        "Why should we choose you as a Coordinator over someone with similar skills and experience?",
      req: true
    }
  ],

  "Content and Writing": [
    {
      id: "q1",
      label:
        "What makes you a good fit for Content & Writing (Answer in 40-50 words)",
      req: true
    },
    {
      id: "q2",
      label:
        "Through your skills, Write a Sponsorship invite mail to a Skincare brand. Kindly do not use AI",
      req: true
    },
    {
      id: "q3",
      label:
        "In 40-50 words describe the colour Red",
      req: true
    },
    {
      id: "q4",
      label:
        "Content & Writing is a crucial dept, how would you contribute to it? ",
      req: true
    },
    {
      id: "q5",
      label:
        "Any changes you would like to suggest to the existing Content & Writing team. If yes, please state. ",
      req: true
    }
  ],

  "Events, Brands, and People": [
    {
      id: "q1",
      label:
        "What elements, according to you, make an event feel memorable and well branded?",
      req: true
    },
    {
      id: "q2",
      label:
        "You have limited time and resources. Would you rather make one thing excellent or make three things reasonably good? Give an example of when your answer would change.",
      req: true
    },
    {
      id: "q3",
      label:
        "If you had to choose between making the event visually impressive and making the attendee experience unforgettable, which would you prioritise and why? Would you ever change your answer?",
      req: true
    },
    {
      id: "q4",
      label:
        "What is one thing you would never compromise on while managing a team, even if it made your job harder?",
      req: true
    },
    {
      id: "q5",
      label:
        "How would you handle an unexpected delay or technical glitch during a live stage performance?",
      req: true
    }
  ],

  "Media and Communication": [
    {
      id: "q1",
      label:
        "Share a link to your best media work (reel, video, post, or design) that you're proud of.",
      req: true
    },
    {
      id: "q2",
      label:
        "Tell us something about yourself that you think makes you different from others.",
      req: true
    },
    {
      id: "q3",
      label:
        "Give us ONE idea that you would implement in our society if you were selected.",
      req: true
    },
    {
      id: "q4",
      label:
        "Imagine we give you a boring announcement: “Registrations for our event are now open.” How would you turn it into an engaging Instagram Reel?",
      req: true
    },
    {
      id: "q5",
      label:
        "If two team members have a creative conflict during a shoot, how would you handle it?",
      req: true
    }
  ],

  "PR (Public Relations)": [
    {
      id: "q1",
      label:
        "Why do you want to join the PR team of TEDxIGDTUW?",
      req: true
    },
    {
      id: "q2",
      label:
        "How active and available can you be for TEDx, especially during events and important deadlines?",
      req: true
    },
    {
      id: "q3",
      label:
        "What is one skill you have that would help you in the PR team?",
      req: true
    },
    {
      id: "q4",
      label:
        "PR involves rejection, follow-ups, and last-minute work. How would you handle such situations?",
      req: true
    },
    {
      id: "q5",
      label:
        "Suppose TEDx IGDTU has an event next week, but the registrations are very low. What would you do as a PR team member to increase registrations?",
      req: true
    }
  ],

  "Creative, Strategy and Design": [
    {
      id: "q1",
      label:
        "What is your design philosophy? Mention the tools you use such as Figma, Illustrator, Photoshop, or Canva.",
      req: true
    },
    {
      id: "q2",
      label:
        "Share a link to your design portfolio, Behance, or Google Drive.",
      req: true
    },
    {
      id: "q3",
      label:
        "How do you approach designing a fresh brand visual identity from scratch?",
      req: true
    },
    {
      id: "q4",
      label:
        "How do you react to critical feedback or requests to completely redesign a piece of artwork?",
      req: true
    },
    {
      id: "q5",
      label:
        "Describe a recent brand campaign or visual banner design that inspired you and explain why.",
      req: true
    }
  ],

  "Sponsorship and Strategic Alliances": [
    {
      id: "q1",
      label:
        "If you had to approach a brand for sponsorship, how would you convince them to associate with us?",
      req: true
    },
    {
      id: "q2",
      label:
        "Suppose a brand agrees to sponsor us but asks for something we cannot provide. How would you handle the situation?",
      req: true
    },
    {
      id: "q3",
      label:
        "You have contacted 10 brands but haven't received any response. What would you do next?",
      req: true
    },
    {
      id: "q4",
      label:
        "Tell us about a time when you had to convince someone or negotiate with them. What did you do and what was the outcome?",
      req: true
    },
    {
      id: "q5",
      label:
        "Imagine you have to pitch TEDxIGDTUW to a brand you've never contacted before. What would your message/email look like?",
      req: true
    }
  ]
};


/* =========================================================
   HELPERS
   ========================================================= */

function getSelectedPreference1() {
  const select = document.getElementById("domain");
  return select ? select.value : "";
}

function getSelectedPreference2() {
  const select = document.getElementById("domain2");
  return select ? select.value : "";
}


/* =========================================================
   PREFERENCE 2 OPTIONS
   ========================================================= */

function updatePreference2Options() {

  const preference1 = document.getElementById("domain");
  const preference2 = document.getElementById("domain2");

  if (!preference1 || !preference2) return;

  const selectedPreference1 = preference1.value;

  /*
   * Preference 2 remains optional.
   * It becomes usable once Preference 1 has been selected.
   */

  preference2.disabled = !selectedPreference1;

  Array.from(preference2.options).forEach(option => {

    if (!option.value) {
      option.disabled = false;
      return;
    }

    option.disabled =
      !!selectedPreference1 &&
      option.value === selectedPreference1;
  });

  /*
   * If Preference 1 is changed and becomes the same as Preference 2,
   * automatically clear Preference 2.
   */

  if (
    selectedPreference1 &&
    preference2.value === selectedPreference1
  ) {
    preference2.value = "";
  }

  clearFieldError(preference2);
}


/* =========================================================
   CASTING PREVIEW
   ========================================================= */

function updateCastingPreview() {

  const preference1 = getSelectedPreference1();
  const preference2 = getSelectedPreference2();

  const preview = document.getElementById("castingPreview");
  const character = document.getElementById("previewCharacter");
  const description = document.getElementById("previewDescription");

  if (!preview || !character || !description) return;

  if (
    !preference1 ||
    !domainData[preference1]
  ) {

    preview.classList.remove("revealed");

    character.textContent =
      "Choose a domain to reveal your character.";

    description.textContent =
      "Your Bollywood alter ego will appear here.";

    return;
  }

  const data1 = domainData[preference1];

  preview.classList.add("revealed");

  let characterText =
    `🎬 Preference 1: ${data1.character} — ${data1.role}`;

  let descriptionText =
    data1.tagline;

  if (
    preference2 &&
    domainData[preference2]
  ) {

    const data2 = domainData[preference2];

    characterText +=
      ` | Preference 2: ${data2.character} — ${data2.role}`;

    descriptionText =
      `${data1.tagline} • Second choice: ${data2.tagline}`;
  }

  character.textContent = characterText;
  description.textContent = descriptionText;
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function goToPage(pageNumber) {

  const currentActivePage =
    getCurrentActivePageNumber();

  /*
   * Validate current page before moving forward.
   */

  if (pageNumber > currentActivePage) {

    if (!validatePage(currentActivePage)) {

      alert(
        "Please fill in all required fields accurately before proceeding."
      );

      return;
    }
  }

  /*
   * Page 2 requires Preference 1.
   */

  if (
    pageNumber === 2 &&
    !getSelectedPreference1()
  ) {

    alert(
      "Please choose your Preference 1 audition role first."
    );

    return;
  }

  /*
   * Make sure Preference 2 is not same as Preference 1.
   */

  if (
    pageNumber === 2 &&
    getSelectedPreference2() &&
    getSelectedPreference2() === getSelectedPreference1()
  ) {

    alert(
      "Preference 2 must be different from Preference 1."
    );

    return;
  }

  /*
   * Toggle theme override for Page 1.
   */

  if (pageNumber === 1) {
    document.body.classList.add("page-1-active");
  } else {
    document.body.classList.remove("page-1-active");
  }

  /*
   * Update page visibility.
   */

  document.querySelectorAll(".form-page").forEach(page => {
    page.classList.remove("active");
  });

  const targetPage =
    document.getElementById(`page-${pageNumber}`);

  if (targetPage) {
    targetPage.classList.add("active");
  }

  /*
   * Update progress bar indicators.
   */

  for (let i = 1; i <= 3; i++) {

    const dot =
      document.getElementById(`step-dot-${i}`);

    if (!dot) continue;

    if (i <= pageNumber) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  }

  /*
   * Render both preference experiences/questions
   * whenever Page 2 opens.
   */

  if (pageNumber === 2) {

    renderCharacterExperience();
    renderDomainQuestions();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   GET CURRENT PAGE
   ========================================================= */

function getCurrentActivePageNumber() {

  const activePage =
    document.querySelector(".form-page.active");

  if (!activePage) return 1;

  switch (activePage.id) {

    case "page-1":
      return 1;

    case "page-2":
      return 2;

    case "page-3":
      return 3;

    default:
      return 1;
  }
}


/* =========================================================
   CHARACTER EXPERIENCE
   ========================================================= */

function renderCharacterExperience() {

  const preference1 =
    getSelectedPreference1();

  const preference2 =
    getSelectedPreference2();

  if (
    !preference1 ||
    !domainData[preference1]
  ) {
    return;
  }

  const data1 =
    domainData[preference1];

  const characterIcon =
    document.getElementById("characterIcon");

  const characterName =
    document.getElementById("characterName");

  const characterTagline =
    document.getElementById("characterTagline");

  const characterQuote =
    document.getElementById("characterQuote");

  const domainDescription =
    document.getElementById("domain-title-desc");

  const characterCard =
    document.getElementById("characterCard");


  /* Preference 1 */

  if (characterIcon) {
    characterIcon.textContent =
      data1.icon;
  }

  if (characterName) {
    characterName.textContent =
      `${data1.character} — ${data1.role}`;
  }

  if (characterTagline) {
    characterTagline.textContent =
      data1.tagline;
  }

  if (characterQuote) {
    characterQuote.textContent =
      data1.quote;
  }

  if (domainDescription) {

    if (
      preference2 &&
      domainData[preference2]
    ) {

      const data2 =
        domainData[preference2];

      domainDescription.textContent =
        `You've been cast for two scenes — Preference 1: ${data1.character}, and Preference 2: ${data2.character}. Let's see how you handle both.`;

    } else {

      domainDescription.textContent =
        `You've been cast as ${data1.character}. Now let's see how you handle your scene.`;
    }
  }

  if (characterCard) {
    characterCard.classList.add("revealed");
  }
}


/* =========================================================
   DYNAMIC QUESTIONS
   ========================================================= */

function renderDomainQuestions() {

  const preference1 =
    getSelectedPreference1();

  const preference2 =
    getSelectedPreference2();

  const container =
    document.getElementById(
      "dynamic-domain-questions"
    );

  if (!container) return;

  container.innerHTML = "";

  /*
   * Preference 1
   */

  if (
    preference1 &&
    domainQuestions[preference1]
  ) {

    renderPreferenceQuestionSection(
      container,
      preference1,
      1
    );
  }

  /*
   * Preference 2
   *
   * Only rendered if the user selected it.
   */

  if (
    preference2 &&
    domainQuestions[preference2]
  ) {

    renderPreferenceQuestionSection(
      container,
      preference2,
      2
    );
  }
}


/* =========================================================
   RENDER ONE PREFERENCE'S QUESTIONS
   ========================================================= */

function renderPreferenceQuestionSection(
  container,
  selectedDomain,
  preferenceNumber
) {

  const data =
    domainData[selectedDomain];

  const questions =
    domainQuestions[selectedDomain];

  if (!data || !questions) return;


  /*
   * Section wrapper
   */

  const section =
    document.createElement("div");

  section.className =
    "preference-question-section";


  /*
   * Heading
   */

  const heading =
    document.createElement("div");

  heading.className =
    "preference-question-heading";


  const headingTitle =
    document.createElement("h3");

  headingTitle.textContent =
    `Preference ${preferenceNumber} — ${selectedDomain}`;


  const headingDescription =
    document.createElement("p");

  headingDescription.textContent =
    `${data.icon} ${data.character} — ${data.role}. ${data.scene}`;


  heading.appendChild(headingTitle);
  heading.appendChild(headingDescription);

  section.appendChild(heading);


  /*
   * Questions
   */

  questions.forEach((question, index) => {

    const group =
      document.createElement("div");

    group.className =
      "form-group";


    /*
     * IMPORTANT:
     *
     * P1 IDs:
     * preference1_q1
     * preference1_q2
     * ...
     *
     * P2 IDs:
     * preference2_q1
     * preference2_q2
     * ...
     */

    const fieldId =
      `preference${preferenceNumber}_q${index + 1}`;

    const errorId =
      `err-${fieldId}`;


    const label =
      document.createElement("label");

    label.setAttribute(
      "for",
      fieldId
    );

    label.innerHTML =
      `${question.label} ${
        question.req
          ? '<span class="req">*</span>'
          : ""
      }`;


    const textarea =
      document.createElement("textarea");

    textarea.id =
      fieldId;

    textarea.placeholder =
      "Type your answer here...";

    textarea.dataset.preference =
      String(preferenceNumber);

    textarea.dataset.question =
      String(index + 1);

    if (question.req) {
      textarea.required = true;
    }


    const errorSpan =
      document.createElement("span");

    errorSpan.className =
      "error-msg";

    errorSpan.id =
      errorId;

    errorSpan.innerText =
      "This field is required.";


    group.appendChild(label);
    group.appendChild(textarea);
    group.appendChild(errorSpan);

    section.appendChild(group);
  });


  container.appendChild(section);
}


/* =========================================================
   COLLECT PREFERENCE ANSWERS
   ========================================================= */

function collectPreferenceAnswers(
  preferenceNumber
) {

  const answers = {};

  for (let i = 1; i <= 5; i++) {

    const field =
      document.getElementById(
        `preference${preferenceNumber}_q${i}`
      );

    answers[`q${i}`] =
      field
        ? field.value.trim()
        : "";
  }

  return answers;
}


/* =========================================================
   VALIDATION
   ========================================================= */

function validatePage(page) {

  let isValid = true;

  const currentPageEl =
    document.getElementById(
      `page-${page}`
    );

  if (!currentPageEl) {
    return false;
  }


  /*
   * Clear previous validation states
   */

  currentPageEl
    .querySelectorAll(".form-group.invalid")
    .forEach(group => {
      group.classList.remove("invalid");
    });


  /*
   * Validate required fields
   */

  const inputs =
    currentPageEl.querySelectorAll(
      "input[required], select[required], textarea[required]"
    );


  inputs.forEach(input => {

    const parent =
      input.closest(".form-group") ||
      input.parentElement;

    if (!parent) return;

    parent.classList.remove("invalid");

    const val =
      input.value
        ? input.value.trim()
        : "";


    if (!val) {

      parent.classList.add("invalid");

      isValid = false;

      return;
    }


    /*
     * Phone validation
     */

    if (
      input.id === "phone" &&
      !/^\d{10}$/.test(val)
    ) {

      parent.classList.add("invalid");

      isValid = false;

      return;
    }


    /*
     * Personal Gmail validation
     */

    if (
      input.id === "personalEmail" &&
      !val
        .toLowerCase()
        .endsWith("@gmail.com")
    ) {

      parent.classList.add("invalid");

      isValid = false;

      return;
    }

  });


  /*
   * Extra safety:
   * Preference 2 cannot equal Preference 1.
   */

  if (page === 1) {

    const preference1 =
      getSelectedPreference1();

    const preference2 =
      getSelectedPreference2();

    if (
      preference1 &&
      preference2 &&
      preference1 === preference2
    ) {

      const preference2Group =
        document
          .getElementById("domain2")
          ?.closest(".form-group");

      if (preference2Group) {
        preference2Group.classList.add("invalid");
      }

      isValid = false;
    }
  }


  /*
   * Page 2:
   * validate dynamically rendered questions.
   *
   * Preference 1 required fields are validated.
   * Preference 2 fields are validated only when P2 exists.
   */

  if (page === 2) {

    const preference1 =
      getSelectedPreference1();

    const preference2 =
      getSelectedPreference2();


    if (!preference1) {

      isValid = false;

    } else {

      /*
       * Validate Preference 1 questions
       */

      if (domainQuestions[preference1]) {

        domainQuestions[preference1].forEach(
          (question, index) => {

            if (!question.req) return;

            const field =
              document.getElementById(
                `preference1_q${index + 1}`
              );

            if (!field) {
              isValid = false;
              return;
            }

            const group =
              field.closest(".form-group");

            if (!field.value.trim()) {

              if (group) {
                group.classList.add("invalid");
              }

              isValid = false;
            }
          }
        );
      }
    }


    /*
     * Validate Preference 2 questions only
     * if Preference 2 is selected.
     */

    if (
      preference2 &&
      domainQuestions[preference2]
    ) {

      domainQuestions[preference2].forEach(
        (question, index) => {

          if (!question.req) return;

          const field =
            document.getElementById(
              `preference2_q${index + 1}`
            );

          if (!field) {
            isValid = false;
            return;
          }

          const group =
            field.closest(".form-group");

          if (!field.value.trim()) {

            if (group) {
              group.classList.add("invalid");
            }

            isValid = false;
          }

        }
      );
    }

  }


  return isValid;
}


/* =========================================================
   FIELD ERROR HELPER
   ========================================================= */

function clearFieldError(field) {

  if (!field) return;

  const parent =
    field.closest(".form-group");

  if (parent) {
    parent.classList.remove("invalid");
  }
}


/* =========================================================
   SUCCESS PAGE
   ========================================================= */

function showSuccessPage() {

  const preference1 =
    getSelectedPreference1();

  const preference2 =
    getSelectedPreference2();


  document.body.classList.remove(
    "page-1-active"
  );


  document
    .querySelectorAll(".form-page")
    .forEach(page => {
      page.classList.remove("active");
    });


  const successPage =
    document.getElementById(
      "page-success"
    );


  if (successPage) {
    successPage.classList.add("active");
  }


  const successRole =
    document.getElementById(
      "successRole"
    );


  if (successRole) {

    const data1 =
      domainData[preference1];

    const data2 =
      preference2
        ? domainData[preference2]
        : null;


    if (data1 && data2) {

      successRole.innerHTML =
        `${data1.icon} ${preference1}<br>` +
        `<span style="display:block;margin-top:5px;">` +
        `🎬 ${preference2}` +
        `</span>`;

    } else if (data1) {

      successRole.textContent =
        `${data1.icon} ${preference1}`;
    }
  }


  /*
   * Remove progress indicator highlight
   */

  document
    .querySelectorAll(".step-indicator")
    .forEach(dot => {
      dot.classList.remove("active");
    });


  /*
   * Countdown
   */

  let seconds = 7;

  const countdownEl =
    document.getElementById(
      "countdown"
    );


  const timer =
    setInterval(() => {

      seconds--;

      if (countdownEl) {
        countdownEl.innerText =
          seconds;
      }

      if (seconds <= 0) {

        clearInterval(timer);

        window.location.href =
          "https://tedx-igdtuw.vercel.app/";
      }

    }, 1000);
}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /*
     * Initial Page 1 theme
     */

    document.body.classList.add(
      "page-1-active"
    );


    const domainSelect =
      document.getElementById(
        "domain"
      );

    const domainSelect2 =
      document.getElementById(
        "domain2"
      );


    /* =====================================================
       PREFERENCE 1 CHANGE
       ===================================================== */

    if (domainSelect) {

      domainSelect.addEventListener(
        "change",
        () => {

          /*
           * Update available P2 options first.
           */

          updatePreference2Options();

          /*
           * Update preview.
           */

          updateCastingPreview();
        }
      );
    }


    /* =====================================================
       PREFERENCE 2 CHANGE
       ===================================================== */

    if (domainSelect2) {

      domainSelect2.addEventListener(
        "change",
        () => {

          const preference1 =
            getSelectedPreference1();

          const preference2 =
            getSelectedPreference2();


          /*
           * Never allow duplicate preferences.
           */

          if (
            preference1 &&
            preference2 &&
            preference1 === preference2
          ) {

            alert(
              "Preference 2 must be different from Preference 1."
            );

            domainSelect2.value = "";

            return;
          }


          clearFieldError(
            domainSelect2
          );

          updateCastingPreview();
        }
      );
    }


    /*
     * Initialize Preference 2.
     */

    updatePreference2Options();

    updateCastingPreview();


    /* =====================================================
       FORM
       ===================================================== */

    const form =
      document.getElementById(
        "recruitmentForm"
      );


    if (!form) return;


    /* =====================================================
       FORM SUBMISSION
       ===================================================== */

    form.addEventListener(
      "submit",
      async function(e) {

        e.preventDefault();


        /*
         * Validate Page 3
         */

        if (!validatePage(3)) {

          alert(
            "Please complete all required fields on this page."
          );

          return;
        }


        /*
         * Extra validation of Page 1 and Page 2
         */

        if (!validatePage(1)) {

          alert(
            "Please check your student details and preferences."
          );

          return;
        }


        if (!validatePage(2)) {

          alert(
            "Please complete all required audition questions."
          );

          /*
           * Go back to Page 2 so user can see
           * which question needs attention.
           */

          document
            .querySelectorAll(".form-page")
            .forEach(page => {
              page.classList.remove("active");
            });

          document
            .getElementById("page-2")
            ?.classList.add("active");

          document.body.classList.remove(
            "page-1-active"
          );

          return;
        }


        const submitBtn =
          document.getElementById(
            "submitBtn"
          );


        if (submitBtn) {

          submitBtn.disabled = true;

          submitBtn.innerText =
            "🎬 ROLLING CREDITS...";
        }


        /* =================================================
           SELECTED PREFERENCES
           ================================================= */

        const preference1 =
          getSelectedPreference1();

        const preference2 =
          getSelectedPreference2();


        const data1 =
          domainData[preference1];

        const data2 =
          preference2
            ? domainData[preference2]
            : null;


        /* =================================================
           COLLECT ANSWERS
           ================================================= */

        const preference1Answers =
          collectPreferenceAnswers(1);

        const preference2Answers =
          collectPreferenceAnswers(2);


        /* =================================================
           FORM DATA
           ================================================= */

        const formData = {

          /*
           * Student details
           */

          fullName:
            document
              .getElementById("fullName")
              .value
              .trim(),

          enrollmentNum:
            document
              .getElementById("enrollmentNum")
              .value
              .trim(),

          year:
            document
              .getElementById("year")
              .value,

          branch:
            document
              .getElementById("branch")
              .value,

          phone:
            document
              .getElementById("phone")
              .value
              .trim(),

          personalEmail:
            document
              .getElementById("personalEmail")
              .value
              .trim(),

          collegeEmail:
            document
              .getElementById("collegeEmail")
              .value
              .trim() || "N/A",


          /*
           * ===============================================
           * NEW PREFERENCE FIELDS
           * ===============================================
           */

          preference1:
            preference1,

          preference2:
            preference2 || "",


          /*
           * Character personas
           */

          characterPersona1:
            data1
              ? data1.character
              : "",

          characterPersona2:
            data2
              ? data2.character
              : "",


          /*
           * ===============================================
           * NEW PREFERENCE 1 QUESTIONS
           * ===============================================
           */

          preference1_q1:
            preference1Answers.q1,

          preference1_q2:
            preference1Answers.q2,

          preference1_q3:
            preference1Answers.q3,

          preference1_q4:
            preference1Answers.q4,

          preference1_q5:
            preference1Answers.q5,


          /*
           * ===============================================
           * NEW PREFERENCE 2 QUESTIONS
           * ===============================================
           */

          preference2_q1:
            preference2Answers.q1,

          preference2_q2:
            preference2Answers.q2,

          preference2_q3:
            preference2Answers.q3,

          preference2_q4:
            preference2Answers.q4,

          preference2_q5:
            preference2Answers.q5,


          /*
           * ===============================================
           * OLD BACKEND COMPATIBILITY
           * ===============================================
           *
           * Existing backend can continue reading:
           *
           * domain
           * characterPersona
           * q1
           * q2
           * q3
           * q4
           * q5
           *
           * These correspond to Preference 1.
           */

          domain:
            preference1,

          characterPersona:
            data1
              ? data1.character
              : "",

          q1:
            preference1Answers.q1,

          q2:
            preference1Answers.q2,

          q3:
            preference1Answers.q3,

          q4:
            preference1Answers.q4,

          q5:
            preference1Answers.q5,


          /*
           * Social details
           */

          socialFollow:
            document
              .getElementById("socialFollow")
              .value,

          socialHandle:
            document
              .getElementById("socialHandle")
              .value
              .trim()
        };


        /* =================================================
           SEND TO BACKEND
           ================================================= */

        try {

          const response =
            await fetch(
              SCRIPT_URL,
              {
                method: "POST",

                headers: {
                  "Content-Type":
                    "text/plain;charset=utf-8"
                },

                body:
                  JSON.stringify(formData)
              }
            );


          const result =
            await response.json();


          /* =================================================
             SUCCESS
             ================================================= */

          if (
            result.status === "SUCCESS"
          ) {

            showSuccessPage();


          } else if (
            result.code ===
            "DUPLICATE_ENTRY"
          ) {

            alert(
              "This enrollment number has already been registered!"
            );


            if (submitBtn) {

              submitBtn.disabled =
                false;

              submitBtn.innerText =
                "🎬 SUBMIT MY AUDITION";
            }


          } else {

            throw new Error(
              result.message ||
              "Form submission failed."
            );
          }


        } catch (error) {

          console.error(
            "Submission Error:",
            error
          );


          alert(
            "There was an issue submitting your audition. Please check your internet connection or try again."
          );


          if (submitBtn) {

            submitBtn.disabled =
              false;

            submitBtn.innerText =
              "🎬 SUBMIT MY AUDITION";
          }
        }

      }
    );
  }
);
