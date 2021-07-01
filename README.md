# Case-intervju for adplogger.

Hvordan vil du løse et relatime-dashboard som viser lesetid for artikler.

Vi ønsker en løsning for et dashboard, som så raskt som mulig viser hvor mange som leser artikler, inklusive lesetiden, f.eks. fordelt på 0-10, 10-20, 20-30, 30-40, 40-50, 50-60 og 60+ sekunder. Dashboardet vil ligge i en nettside som vil kjøres av moderne nettlesere.

Caset er ikke at du skal kode en ferdig løsning, men at du kan vise på overordnet nivå hvordan du kunne tenkt deg at en slik løsning ble løst. 

Fokuset er frontend-biten (logging og visualisering), men tenk gjerne på datastrukturer og mekanismer for lagring eller aggregering av tall serverside. 

ADPlogger er Amedia sitt egenutviklede loggebibliotek. Den utvikles nå i versjon nummer to som har fått en ny datastruktur. Datatypene er delt i to hovedgrupper [metaelementer og events](./schemas/docs). Metaelementer er de romlige elementene på siden, som f.eks. en artikkel eller en videospiller. Events er det som skjer med metaelementene. F.eks. når en artikkel kommer inn i viewport, sendes et [inscreen event](./schemas/docs/event-inscreen.md). 

Data blir i dag sendt til endepunktet `collect.adplogger.no` og går deretter gjennom noen foredlingssteg før det dyttes inn i BigQuery. Det logges i dag 1000-2000 meldinger i sekundet. Å hente data fra [BigQuery](https://cloud.google.com/bigquery) er ikke forenlig med et realtime-dashboard og din oppgave er å tenke hvordan vi kan få til et dashboard som viser sanntidsdata.

Vi har lagt med en [chrome extension](./dev-tools-extension-v2) som du kan [installere](chrome://extensions/) om du ønsker å se data som sendes fra våre nettavisen til adplogger2 i dag. Velg `load unpacked` og gå til mappen `dev-tools-extension-v2`.

Noen spørsmål du kan forsøke å besvare:

* Logger vi nødvendige data for å kunne lage dashboardet, evt. bør de logges i et annet format?
* Hvordan kan vi sikre at vi ikke mister for mye data, f.eks. hvis brukeren lukker nettleseren
* Hvordan vil du mellomlagre data som dashboardet skal vise?



