# Ali Sajid

Full-Stack Software Engineer

Berlin, Germany | hello@alisajidcs.com | +49 176 27512130

Website: https://alisajidcs.com/ | LinkedIn: https://linkedin.com/in/alisajidcs | GitHub: https://github.com/alisajidcs

## Master CV — factual reference

This is a comprehensive reference for Career-Ops, not a short application CV. Prepared from the reviewed career-knowledgeBase records at commit 6185728c2fd21918feb8a93f2662a089f7b8c4a3. Updated 2026-10-06. User-stated experience is not independently verified. Preserve uncertainties and distinguish personal contributions from team product capabilities.

## Profile

Full-stack software engineer with hands-on JavaScript/TypeScript, React/Next.js, Node.js and Python/FastAPI experience. Work spans public-sector AI, healthcare, fintech, maritime enterprise software and earlier web/mobile game development. Leadership and mentoring scope varies by role. No quantified savings, accuracy or revenue achievements have been supplied.

## Experience

### Department of Culture and Tourism Abu Dhabi

- Title: Full Stack Engineer (CV); AI Engineer / Full-Stack AI Engineer (user-described role).

- Dates: Jul 2025–Jun 2026 (CV).

- Location/context: Abu Dhabi, UAE.

Built AI tools across requirements, frontend, backend and deployment. Most earlier projects were teamwork. Later internal assistant/BI project was mainly personally implemented end to end. Mentored two junior engineers; another AI engineer sometimes assisted/reviewed.

#### Internal AI assistant and conversational BI

Source record: project-dct-internal-assistant

**Context and product:** UAE-hosted internal assistant for sensitive government work, with existing departmental Power BI/other dashboards and conversational access.

**Personal contribution:** Mostly personally gathered requirements, implemented frontend/backend and deployed. Mentored two juniors and received occasional AI-engineer assistance. Existing dashboards not claimed as personally authored.

**Technologies:** Azure-hosted LLM; models described as GPT-4.0 for production; open-source models tried in development; embeddings; PostgreSQL vector storage/pgvector. Exact frontend/backend/deployment service for this product not individually confirmed.

**Implementation and decisions:** Chat, file ingestion, document/presentation generation, projects and persistent memory. Memory isolated using user ID plus project ID; vector retrieval included supplied data and user memory. Chatbot answered questions about departmental dashboards. Email integration remained planned at departure.

**Outcomes and limits:** Internal assistant capabilities reported. UAE hosting is user-stated; no independent residency/security audit or usage metrics.

**Unknowns:** Exact model identifiers, tenancy isolation implementation, BI access architecture, runtime stack and user adoption.

#### Recruitment intelligence, HR policy and job generation

Source record: project-dct-recruitment

**Context and product:** Internal tool augmenting existing SAP jobs/applicants portal, plus employee HR-policy assistant and HR job-description generator.

**Personal contribution:** Built system with team; made processing scheduling, asynchronous processing and vector-storage decisions. Mentored junior engineers.

**Technologies:** Next.js; Tailwind CSS; Python/FastAPI; PostgreSQL/pgvector; LangChain; LangGraph; Azure OpenAI (GPT-4.1 and model described as GPT-4.0, exact identifier unresolved); Azure App Service; Azure Active Directory.

**Implementation and decisions:** Imported selected jobs/applicants from SAP. PDF-to-text libraries plus LLM extraction produced reusable JSON. Background workers rated applicants against JD and internal SAP criteria with explanations (recalled labels good/bad/excellent). Approximate processing limit: 1,000 applicants per run, not 1,000 concurrent requests. Midnight cron jobs used shared LLM quota during low demand. Separate Python processes avoided synchronous upload latency. Embeddings/vector search supported retrieval. HR policy RAG available to employees; JD generation used embedded requirements/standards.

**Outcomes and limits:** HR team began using tool. No ranking-accuracy, fairness, time-saving or throughput measurements supplied.

**Unknowns:** SAP product/API, parsing libraries, queues/schedulers, exact model IDs and criterion implementation.

#### Procurement intelligence and tender comparison

Source record: project-dct-procurement

**Context and product:** Compare vendor tender proposals of approximately 200–300 products against government reference pricing and each other.

**Personal contribution:** Built analysis tool aligned with procurement team process; replayed historical tenders for validation; quota scheduling and agentic workflows.

**Technologies:** Next.js; Python/FastAPI; LangChain; LangGraph; embeddings/vector search; Azure App Service; Azure Active Directory. pgvector chosen for DCT AI storage; exact per-project deployment not separately detailed.

**Implementation and decisions:** Excel submissions required prescribed columns/format. Spreadsheet-style comparison showed vendors together, with detailed reasoning and negotiation suggestions for unfavorable line items. Recorded awards for later analysis/prediction. Historical data included proposals and actual winners from previous year. Chatbot discussed tenders. Midnight scheduling handled shared quota.

**Outcomes and limits:** Historical comparisons used to test/refine system. Known winners are reference outcomes, not proof of objectively optimal bids. Latency improvement reported qualitatively; no figures. Prediction functionality/results not established.

**Unknowns:** Meaning of “graph” (chart, knowledge graph or workflow); deployed forecasting details; measured evaluation results.

### AI71 / previously Locai (user-described company transition)

- Title: Full Stack Engineer (CV).

- Dates: Apr 2024–May 2025 (CV).

- Location/context: Abu Dhabi, UAE.

Primarily owned frontend; contributed partially to backend and Python AI layers when needed and participated in architecture meetings. Team approximately 15; not a claim of managing all 15. Deployment moved from AWS to Docker/Kubernetes; DevOps owned Kubernetes setup.

#### Healthcare conversation and documentation platform

Source record: project-ai71-healthcare

**Context and product:** Doctor–patient conversations transcribed into consultation/prescription documentation and insurance-related documentation for review/editing.

**Personal contribution:** Primary frontend ownership; partial backend/AI contribution and architecture participation. Transcription engine built by another team.

**Technologies:** Next.js; React; Chakra UI; Figma designs; React Query; NestJS backend (later account); PostgreSQL; Python AI service; Jest; AWS; Docker/Kubernetes.

**Implementation and decisions:** LLM service generated documents; doctors reviewed and edited them. RAG supported questions over prior patient sessions. Initial backend description said Next.js, later NestJS; precise boundary unresolved.

**Outcomes and limits:** At departure, sales were pitching product; user count and time savings unknown. Positive sales feedback is secondhand. Claims about insurance losses are sales rationale, not substantiated achievements.

**Unknowns:** LLM/transcription providers, actual adoption, personal backend modules, deployment dates and backend boundaries.

### Confidential maritime ERP company

- Title: Backend Engineer (CV); Squad Lead responsibilities (user-stated).

- Dates: Aug 2023–Mar 2024 (CV); conflicts with recalled duration slightly over one year.

- Location/context: USA — remote (CV).

Hands-on backend work, including chatbot module; led approximately 3–4 engineers, with broader squad around 6–7 including coordination roles. Frontend engineers used Angular; Ali did not do hands-on frontend in this role. No cloud infrastructure access. Employer identity confidential under contract.

#### Confidential maritime ERP microservices

Source record: project-maritime-erp

**Context and product:** US product company: maritime operations including chartering, accounting, HR/payroll and vessel condition.

**Personal contribution:** Hands-on backend engineer and squad lead; owned chatbot module. Led frontend engineers using Angular without personally implementing that frontend. Introduced peer PR reviews before final lead review.

**Technologies:** Express.js; TypeScript; PostgreSQL; Jest; microservices.

**Implementation and decisions:** Team-owned services and product integration. Cloud infrastructure existed but Ali lacked access. Chatbot implementation details not supplied.

**Outcomes and limits:** Qualitative reduction in review bottleneck reported; no measured delivery figures.

**Unknowns:** Calendar duration conflict, chatbot technology and exact formal lead title. Employer must remain anonymous.

### eMumba — spelling to confirm

- Title: Exact title unknown; grouped CV title: Full Stack Developer.

- Dates: Unknown; approximately six months.

- Location/context: Location not individually confirmed.

Maintained and extended an existing hosting/networking product, added features and fixed bugs; did not build it from scratch.

#### Hosting/networking product maintenance

Source record: project-emumba-hosting

**Context and product:** Existing hosting-provider/networking application.

**Personal contribution:** Added features and fixed defects; did not create product from scratch.

**Technologies:** Next.js/React; Redux; Storybook; AG Grid; Express.js; TypeScript.

**Implementation and decisions:** AG Grid supported large/virtualized tables. Exact hosting/networking functions not supplied.

**Outcomes and limits:** Maintenance and extension over approximately six months; no metrics.

**Unknowns:** Product name, dates/title and specific delivered features.

### TenPuls — spelling to confirm

- Title: Exact title unknown; grouped CV title: Full Stack Developer.

- Dates: Unknown.

- Location/context: Remote work with German client FinStreet; employer was an offshore engineering service provider.

Led around 10 engineers, sometimes more. Worked directly with FinStreet product owner; client developers reviewed the team’s work. Delivered customer-specific features while preserving behavior for existing clients.

#### FinStreet white-label loan application platform

Source record: project-tenpuls-loans

**Context and product:** Loan application products for German banks and car dealerships; independently deployed customer variants.

**Personal contribution:** Led offshore engineering team; implemented loan forms and client-specific features with product-owner collaboration and client review.

**Technologies:** React; Next.js (later clarified); Redux; Ruby on Rails backend; PostgreSQL; AWS; Storybook; Jest; Cypress. Hands-on Rails ownership not explicitly established.

**Implementation and decisions:** Backend feature configuration changed app behavior per customer. Preserved existing customer behavior when adding features. Bank staff handled other steps; acceptance was another module. Do not attribute identity verification/calculation/document upload implementation without further evidence.

**Outcomes and limits:** White-label delivery reported; no number of clients, revenue or performance measures.

**Unknowns:** Exact dates/title, company spelling, personal backend responsibilities.

### BitSol Technologies — spelling to confirm

- Title: Engineer → Lead Engineer; intermediate Senior title uncertain.

- Dates: Unknown; within grouped Apr 2016–Jul 2023 period.

- Location/context: Earlier experience grouped under Islamabad, Pakistan.

Project-dependent leadership; teams approximately 3–7, sometimes working alone on smaller projects. Client reporting, some scrum facilitation, API integration and full-stack delivery. Databases included PostgreSQL and MongoDB/Mongoose; AWS Cognito used on an unspecified project.

#### School grading and career-planning platform

Source record: project-bitsol-education

**Context and product:** Tool for schools to manage grades and support student career choices.

**Personal contribution:** Contributed as part of approximately 5–6-person team; no claim of sole feature ownership.

**Technologies:** React; TypeScript; GraphQL; Firebase Store (exact service name to confirm).

**Implementation and decisions:** School/student management and career-planning support.

**Outcomes and limits:** Team product work reported; no adoption metrics.

**Unknowns:** Exact contribution, service naming, decision logic and project dates.

#### E-commerce application

Source record: project-bitsol-commerce

**Context and product:** Team-developed e-commerce product.

**Personal contribution:** Worked on application; ownership of individual features not specified.

**Technologies:** React; Express.js; AWS EC2.

**Implementation and decisions:** AWS EC2 deployment; other architecture details not supplied.

**Outcomes and limits:** Application work reported; no scale/revenue metrics.

**Unknowns:** Product name, feature ownership, database and dates.

#### Medication adherence and hospital onboarding

Source record: project-bitsol-medication

**Context and product:** COVID-era product: patients recorded medication-taking videos, hospital staff verified adherence. React admin portal supported hospitals.

**Personal contribution:** Backend hospital onboarding and hospital-specific changes. Did not design original video-upload backend. Broader product was team-built.

**Technologies:** Express.js; TypeScript; AWS; React admin portal.

**Implementation and decisions:** Hospital onboarding/customization; administration portal viewed app input. Patient video capability describes product context, not sole authorship.

**Outcomes and limits:** Ali reports product sold to multiple hospitals; count and adoption evidence unavailable.

**Unknowns:** Specific backend modules, database, AWS services and hospital counts.

#### Sales calling and monitoring platform

Source record: project-bitsol-sales

**Context and product:** Web tool for sales calls, messaging and monitoring.

**Personal contribution:** Implemented calling/transcription/sentiment APIs and worked on full-stack product. Team/project leadership varied.

**Technologies:** NestJS; TypeScript; React; Nexmo API; IBM Watson; WebSockets. Redux stated across prior React work.

**Implementation and decisions:** Calls made from web app. Webhooks supported transcription; IBM Watson APIs used for transcription and sentiment analysis of calls. Messaging used WebSockets. Sentiment intended to aid agent performance monitoring, not a validated measure of emotions.

**Outcomes and limits:** Product capabilities reported; no accuracy or business metrics.

**Unknowns:** Deployment and database for this specific project; precise Watson services.

### Metis — spelling to confirm

- Title: Software Engineer → lead role (user-stated; exact lead title unknown).

- Dates: Unknown; approximately one year.

- Location/context: Earlier experience grouped under Islamabad, Pakistan.

Led approximately 3–4 engineers/team members, including QA according to later clarification. Gathered requirements from Islamabad Police, developed tools and trained clients. PostgreSQL, CodeIgniter, Bootstrap, jQuery.

#### Police vehicle maintenance and expense management

Source record: project-metis-vehicles

**Context and product:** Management tool for Islamabad Police vehicles.

**Personal contribution:** Developed tools in role including requirements gathering and client training.

**Technologies:** Company stack: PHP/CodeIgniter, JavaScript/jQuery, Bootstrap, PostgreSQL. Per-tool details not separately confirmed.

**Implementation and decisions:** Tracked oil-change timing and vehicle expenditure.

**Outcomes and limits:** Tool delivered according to account; no measured savings.

**Unknowns:** Vehicle counts, precise features and deployment.

#### Police weapons-store management

Source record: project-metis-weapons

**Context and product:** Weapons inventory/store tool with a mechanism similar to uniform-store management.

**Personal contribution:** Built tool within police contract.

**Technologies:** Company PHP/CodeIgniter web stack; exact biometric reuse not confirmed.

**Implementation and decisions:** Inventory/store workflow; no further mechanics supplied.

**Outcomes and limits:** Tool reported; no quantified results.

**Unknowns:** Whether biometric integration was reused and precise eligibility rules.

#### Islamabad Police uniform inventory and eligibility

Source record: project-metis-uniform

**Context and product:** Replacement of an offline C# system with an online uniform-store application.

**Personal contribution:** Developed application and Java fingerprint bridge; gathered requirements and trained clients while progressing to lead.

**Technologies:** PHP; CodeIgniter; Java console application and hardware SDK; JavaScript/jQuery; Bootstrap; PostgreSQL.

**Implementation and decisions:** Single-kiosk/cashier workflow checked staff eligibility for uniforms and last issuance. Biometrics verified identity. PHP exec passed parameters to Java SDK wrapper to check/store fingerprints. Browser-driven application accessed server-side Java bridge.

**Outcomes and limits:** Operational tool for police according to account; online means web-based, not necessarily public Internet. No scale claims beyond single-kiosk workflow.

**Unknowns:** SDK/hardware vendor, deployment topology, authentication details and exact dates.

### Jin Technologies

- Title: Exact title unknown; grouped CV title: Full Stack Developer.

- Dates: Unknown; approximately one year.

- Location/context: Earlier experience grouped under Islamabad, Pakistan.

PHP web development on multiple projects, including white-label auctions. Docker deployments and GitHub code maintenance.

#### White-label online auctions

Source record: project-jin-auctions

**Context and product:** Online auction products for multiple clients, mostly deployed in Australia.

**Personal contribution:** Worked on client-specific changes to shared base code while protecting existing clients from regressions.

**Technologies:** Company stack: PHP, CodeIgniter, Symfony, Bootstrap, jQuery, AngularJS 1.x, Docker, GitHub. Exact framework per auction variant unknown.

**Implementation and decisions:** Each client received its own product variant. New requirements implemented in base code with compatibility for other clients.

**Outcomes and limits:** Multiple client products reported; no revenue or performance figures.

**Unknowns:** Project names, exact role, features and per-project stack.

### Game studio — name unknown

- Title: Game Developer.

- Dates: Unknown; approximately six months after degree completion.

- Location/context: Islamabad, Pakistan is stated only for the grouped earlier experience in the CV.

Unity mobile game development; personally implemented gameplay, animal AI, level design, physics, animation integration and UI asset integration. Designer supplied UI images; model packages supplied animations. User reports publishing to Android and iOS.

#### Wolf simulator mobile game

Source record: project-game-wolf-simulator

**Context and product:** Multi-level wolf hunting/combat game.

**Personal contribution:** Implemented gameplay, animal AI, levels, physics, UI integration and animation selection/integration. Designer supplied images; imported models already included animations.

**Technologies:** Unity; Android and iOS. C# likely consistent with Unity work, but not explicitly restated for this game.

**Implementation and decisions:** Mountain-bounded maps with trees and animals. Animals wandered near spawn areas; prey fled near player wolf, predators fought. Levels varied terrain and enemies, with textual hunting tutorial and territory progression. Mentioned rabbits, deer, wolves, tigers and later bear encounters.

**Outcomes and limits:** Ali reports publication on both mobile platforms and ad-removal in-app purchases across gaming work. No surviving links; studio may have closed, but closure unverified.

**Unknowns:** Game title, employer, publication dates/links and per-game purchase implementation.

#### Stealth sniper mobile game

Source record: project-game-sniper

**Context and product:** Hitman-inspired character; enemies patrolled an environment approximately recalled as a factory.

**Personal contribution:** Solo game implementation as clarified for gaming role; UI assets provided by designer.

**Technologies:** Unity; Android/iOS gaming role.

**Implementation and decisions:** Stealth sniper gameplay with other weapons, including assault rifles, when stealth was broken. Imported animation assets integrated by Ali.

**Outcomes and limits:** User reports publishing mobile games; exact per-game release evidence unavailable.

**Unknowns:** Title, precise environment, weapon systems, links and publication dates.

## Education

Bachelor of Engineering in Information Technology — University of Engineering and Technology, Taxila | 2012–2016

### C++ 2D shooting game

**Context and product:** Early-semester educational game.

**Personal contribution:** Built the game.

**Technologies:** C++; basic geometric graphics.

**Implementation and decisions:** Planes above a ship; turrets aimed in three fixed directions; shooting planes and parachuting enemies. Enemies reaching bottom reduced health, leading to game over.

**Outcomes and limits:** Completed educational project according to Ali; no usage metrics.

**Unknowns:** Graphics library, precise semester, repository and assets.

### Microcontroller home automation

**Context and product:** Browser controls for appliances such as lights and fans.

**Personal contribution:** Built the computer/microcontroller control system.

**Technologies:** Plain Node.js (not Express); C microcontroller code; PIC-family controller; DB9 serial port; transistors and relays.

**Implementation and decisions:** Node.js console application both hosted a web server/page and controlled the computer serial port. Serial signals reached the microcontroller I/O, controlling appliances through transistors for smaller loads and relays for higher-voltage loads. Exact register names in recollection need confirmation.

**Outcomes and limits:** Demonstrated browser-based on/off control; no commercial deployment claimed.

**Unknowns:** PIC model, serial protocol, circuit details and exact dates.

### Unity medieval Android game and AR adaptation

**Context and product:** Final-year medieval action game, later extended to marker-based augmented reality.

**Personal contribution:** Personally implemented the entire Unity application.

**Technologies:** Unity; C#; Android; Vuforia.

**Implementation and decisions:** Original village/river terrain with knight, sword and spawning monsters. AR adaptation removed terrain, added invisible ground plane and anchored world origin to a marker. Used QR-code and Pokémon-card markers. Mobile on-screen controls moved the knight to fight monsters. AR, not VR.

**Outcomes and limits:** Educational implementation; release/usage not established.

**Unknowns:** AR extension date, Vuforia version and marker configuration.

### Arduino chicken brooder

**Context and product:** Later personal hardware project; relation to degree period not established.

**Personal contribution:** Ali reports building a brooder.

**Technologies:** Arduino.

**Implementation and decisions:** No additional implementation supplied.

**Outcomes and limits:** No measured outcome supplied.

**Unknowns:** Date, sensors, control logic, language and operating results.

## Technology experience and recency

This is career data, not an executable skill. Depth is limited to supplied evidence. “Current” below means user-stated active use as of 2026-10-06, not evidence of continuous employment. Exact last-use dates remain unknown except PHP.

| Technology | Evidence and depth | Recency |
|---|---|---|
| JavaScript / TypeScript | Hands-on backend/frontend across BitSol, later roles and DCT | Actively used as of account |
| React / Next.js | Production frontend; primary frontend ownership at AI71; end-to-end later DCT work | Next.js actively used as of account |
| Node.js / Express / NestJS | Production backend at BitSol and maritime company; NestJS sales platform | Last specific role dates in timeline |
| Python / FastAPI | DCT production backend and agentic workflows; partial AI71 contribution | Python actively used as of account |
| PHP / CodeIgniter / Symfony | Production earlier career, including police tools and Jin | PHP last used 2019 |
| PostgreSQL / pgvector | Relational storage and DCT vector architecture decision | DCT Jul 2025–Jun 2026; exact later use unknown |
| MongoDB / Mongoose | BitSol production projects; specific allocation unknown | Exact last use unknown |
| ChromaDB / MongoDB vector search | DCT evaluation/prototyping before pgvector | Not claimed as retained production architecture |
| Embeddings / RAG / vector search | DCT AI products; AI71 patient-history retrieval | Personal ownership varies by project |
| LangChain / LangGraph | DCT recruitment/procurement retrieval and orchestration | DCT period |
| Azure OpenAI / OpenAI | DCT production use; model labels recalled as GPT-4.0/GPT-4.1 | Exact model IDs need confirmation |
| Open-source LLMs | Development experimentation; model names unspecified | Exact dates unknown |
| AWS / EC2 | BitSol e-commerce deployment; AWS across later products | Exact services per project partly unknown |
| Azure App Service / Azure AD | DCT recruitment/procurement deployments and internal login | DCT period |
| Docker | Jin deployments; AI71 service deployments | Exact last use unknown |
| Kubernetes | Monitoring and restarting pods at AI71; DevOps owned cluster setup | Limited hands-on depth; not cluster architecture ownership |
| Jest / Cypress | Unit/E2E testing at TenPuls; Jest in maritime and AI71 | Exact last use unknown |
| Storybook / Redux | TenPuls and eMumba; Redux across prior React projects per Ali | Exact last use unknown |
| React Query | AI71 API/data-fetching frontend | AI71 period |
| AG Grid | eMumba product table UI | eMumba period |
| GraphQL / Firebase Store | BitSol school platform | Exact Firebase service to confirm |
| WebSockets / Nexmo / IBM Watson | Sales platform; API integrations implemented by Ali | BitSol period |
| AWS Cognito | One BitSol project; project unidentified | BitSol period |
| Bootstrap / jQuery / AngularJS 1.x | Earlier hands-on web work | Exact last use unknown |
| Angular | Shipping squad frontend technology; led engineers, no hands-on frontend in that role | Do not infer recent hands-on Angular from leadership |
| Tailwind CSS / Chakra UI | DCT recruitment / AI71 respectively | Role-specific |
| Figma | Implemented designer-provided interfaces | Not a claim of originating visual designs |
| Unity / C# / Vuforia | Education Android/AR; Unity professional games | Exact last use unknown |
| C++ | Educational 2D game | 2012–2016 education period |
| C / PIC / DB9 / relays | Educational home automation | 2012–2016 education period |
| Arduino | Later personal chicken brooder | Details/date unknown |
| Ruby on Rails | FinStreet product backend context | Personal hands-on contribution not established |
| Power BI | Integrated existing dashboards/conversational access | Dashboard authorship not established |
| GitHub | Earlier code maintenance and collaborative development | Exact last use not separately asked |


## Leadership and engineering decisions

### Removing a squad-lead review bottleneck

**Situation:** All PRs required Ali’s review while he also implemented backend code, slowing the team.

**Personal action:** Introduced peer review before final squad-lead review so issues were discussed/fixed earlier.

**Reported outcome:** Qualitatively fewer comments and less final-review time for Ali and the team.

**Limits:** No numerical review-cycle improvement supplied; confidentiality applies.

### Working within a shared LLM quota

**Situation:** Shared API quota made processing all CVs at once impractical.

**Personal action:** Created midnight cron processing when other teams were unlikely to consume quota. Applied approach to procurement too.

**Reported outcome:** Processing was scheduled around quota constraints; no quantified throughput, uptime or cost outcome.

**Limits:** Schedule trades immediacy for off-peak capacity. Retry/backoff and reservation behavior not supplied.

### Negotiating an unexpected hospital commitment

**Situation:** Sales promised a new hospital deliverable by end of week outside the existing roadmap.

**Personal action:** Clearly explained infeasibility, sought colleagues’ support, proposed added staffing and reprioritization into dedicated sprints rather than simultaneous roadmap delivery.

**Reported outcome:** Stakeholders accepted a revised approach. Actual completion date and staffing changes not supplied.

**Limits:** Possible next-week delivery was discussed, not a confirmed result. Preserve professional tone and avoid attributing motives.

### Validating procurement against historical tenders

**Situation:** Needed real reference outcomes to test tender analysis.

**Personal action:** Obtained previous-year proposals and award winners; replayed selected tenders and compared outputs to known results.

**Reported outcome:** Helped testing/refinement; Ali also reports latency improvement without measurements.

**Limits:** Historical winners are observed decisions, not necessarily the optimal recommendation. Evaluation method and latency link need detail.

### Leadership and mentoring scope

**Situation:** Leadership scope differed by employer/project.

**Personal action:** Metis: approximately 3–4 team members including QA; BitSol: project-dependent leadership and teams around 3–7; TenPuls: approximately 10 engineers or more; maritime: 3–4 engineers in broader squad around 6–7; DCT: mentored two junior engineers with occasional assistance from another AI engineer.

**Reported outcome:** Responsibility evidence is user-stated; team size is not automatically direct-report count. AI71 team of around 15 is context, not 15 reports.

**Limits:** Formal titles, reporting lines and exact durations need confirmation.

### Choosing pgvector over another database

**Situation:** Needed vector retrieval while already operating PostgreSQL.

**Personal action:** Tried ChromaDB and MongoDB vector search, then chose pgvector to reuse existing infrastructure.

**Reported outcome:** Consolidated vector storage with existing PostgreSQL setup; no comparative benchmark supplied.

**Limits:** Decision based on reuse/operational simplicity, not demonstrated superiority over alternatives.

### Separating document processing from request handling

**Situation:** CV/job/file processing increased API latency; immediate extraction results were unnecessary.

**Personal action:** Moved work into separate Python processes, allowing the API to acknowledge uploads first. Evaluated PDF parsing libraries.

**Reported outcome:** Avoided waiting for processing in upload request flow; no before/after latency measurements.

**Limits:** Queue mechanism, reliability/retries and selected PDF library remain unknown.

## Languages

Previous CV states English: professional; German: A1 and learning. Reconfirm current proficiency.

## Factual limitations and unresolved details

### Open questions and conflicts

Unknowns are preserved rather than filled with assumptions. These do not prevent use of supported facts.

### Timeline and employer identity

1. Individual dates and exact titles for gaming employer, Jin Technologies, Metis, BitSol, TenPuls and eMumba. Supplied CV only groups Apr 2016–Jul 2023.
2. Confidential maritime role: CV says Aug 2023–Mar 2024 (about eight months); earlier recollection says slightly over one year. Retain CV dates provisionally; confirm against user-designated website/LinkedIn dates.
3. Earlier employer spellings: Metis/Matisse/Metif, TenPuls/Tenpulse/Tenstack, eMumba/eMamba and BitSol/BitSoul are transcription variants. Use working names, not independently verified legal names.
4. Gaming employer name and dates; mobile release links unavailable. Do not state company closure as fact.
5. Lead titles/reporting lines: Metis promotion title unspecified; BitSol senior intermediate title corrected mid-account; TenPuls title missing; maritime CV title Backend Engineer alongside user-stated Squad Lead responsibilities.
6. Exact Locai → AI71 corporate transition and dates, if relevant. User describes sale/name change; no independent verification.
7. Website/LinkedIn pages could not be fetched. User states dates there are correct. No page-content claims yet imported.

### Project and technical details

- AI71 backend: initial Next.js statement followed by NestJS. Confirm division between frontend, server routes and backend services.
- DCT model names: “GPT-4.0”, “4.0” and “GPT-4.1” supplied; preserve wording until exact Azure deployment/model identifiers confirmed. Do not silently convert to GPT-4o.
- DCT applicant limit: described as around 1,000 applicants per processing run. Concurrency, daily throughput and successful processed counts not established.
- DCT procurement “graph”: could mean charts, a knowledge graph or workflow graph. Predictive capability was intended; deployed prediction results not confirmed.
- Internal assistant runtime/frontend stack and exact Azure service not explicitly detailed. Do not inherit recruitment/procurement App Service setup automatically.
- PDF library, queue/process management, retries and biometric hardware SDK unknown.
- “Firebase Store”: exact Firebase service unknown.
- BitSol AWS Cognito and individual database assignments not identified by project.
- Arduino brooder: dates, hardware and implementation unknown.

### Outcomes and evidence

- No numerical time-saving, latency, cost, review-cycle, accuracy or revenue measures supplied.
- DCT HR adoption is user-stated. Procurement and internal assistant user counts/adoption detail unknown.
- AI71 user scale unknown at departure; sales feedback and financial arguments remain attributed, not verified results. Reference to banks in healthcare sales account needs context if ever used.
- Historical tender winners are reference outcomes, not proof of objective optimality.
- CV-only technologies and feature claims require confirmation before promotion to structured factual records; see inventory.
- Contact details, availability, location and language level are document-stated and time-sensitive.



## Source policy

Employer dates/titles and contact details use the supplied previous CV; detailed contributions use Ali’s accounts and corrections stored in career-knowledgeBase. Website/LinkedIn dates are designated authoritative by Ali but their pages were not accessible. Do not silently invent missing dates. The confidential maritime employer must stay anonymous. Refresh this master from reviewed knowledge-base changes; normal content creation reads this file rather than raw sibling records.
