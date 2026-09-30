const commonsFile = (file) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(file)}`;
const commonsPage = (file) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

const weapons = [
  {
    id: "g36",
    name: "G36",
    type: "Sturmgewehr",
    accent: "#b5120c",
    accentSoft: "#efbbb5",
    summary: "Gasdrucklader im NATO-Kaliber 5,56 × 45 mm. Das Standardgewehr wird je nach Rüstzustand mit optischen Visieren eingesetzt.",
    image: "Bundeswehrsoldat,_bewaffnet_mit_Gewehr_G36_und_Pistole_P8_(10579792904).jpg",
    imageCredit: "Dirk Vorderstraße · CC BY 2.0",
    specs: [
      ["Kaliber", "5,56 × 45 mm NATO"],
      ["Gewicht", "ca. 3,6 kg ohne Anbauteile"],
      ["Länge", "1.000 / 750 mm"],
      ["Rohrlänge", "480 mm"],
      ["Magazin", "30 Patronen"],
      ["Feuerarten", "Einzel- und Dauerfeuer"],
      ["Kadenz", "ca. 750 Schuss/min"],
      ["Wirkbereich", "bis ca. 500 m"],
      ["Verschluss", "Drehkopfverschluss"]
    ],
    loadStates: [
      {
        title: "Nach Sicherheitsüberprüfung",
        context: "Waffe entladen, Patronenlager überprüft, entspannt und gesichert.",
        report: "G36 entladen, Patronenlager frei, entspannt und gesichert."
      },
      {
        title: "Teilgeladen",
        context: "Das Magazin befindet sich in der Waffe.",
        report: "G36 teilgeladen."
      },
      {
        title: "Fertiggeladen / klar zum Gefecht",
        context: "Magazin in der Waffe; Verschluss betätigt beziehungsweise Waffe gespannt.",
        report: "G36 fertiggeladen."
      }
    ],
    source: "https://www.bundeswehr.de/de/ausruestung-technik-bundeswehr/ausruestung-bewaffnung/gewehr-g36",
    video: "https://www.youtube.com/watch?v=-G2FIA7ysSw"
  },
  {
    id: "p8",
    name: "P8",
    type: "Selbstladepistole",
    accent: "#24566d",
    accentSoft: "#bed8e3",
    summary: "Dienstpistole im Kaliber 9 × 19 mm. Sie arbeitet als Rückstoßlader und besitzt einen Spannabzug für den ersten Schuss.",
    image: "HK_P8_noBG.png",
    imageCredit: "Realn3rd · Wikimedia Commons",
    specs: [
      ["Kaliber", "9 × 19 mm"],
      ["Gewicht", "ca. 750 g"],
      ["Rohrlänge", "108 mm"],
      ["Magazin", "15 Patronen"],
      ["Mündungsgeschw.", "ca. 360 m/s"],
      ["Feuerart", "Einzelfeuer"],
      ["Visierung", "Kimme und Korn"],
      ["System", "Rückstoßlader"]
    ],
    source: "https://www.bundeswehr.de/de/ausruestung-technik-bundeswehr/ausruestung-bewaffnung/pistole-p8",
    video: "https://www.bundeswehr.de/de/mediathek/60-sekunden-selbstladepistole-p8-65266"
  },
  {
    id: "mg5",
    name: "MG5",
    type: "Universalmaschinengewehr",
    accent: "#4d681f",
    accentSoft: "#d2dfad",
    summary: "Gurtgespeistes Maschinengewehr im NATO-Kaliber 7,62 × 51 mm. Es ist als Gasdrucklader mit offenem Verschluss ausgeführt.",
    image: "Heckler_&_Koch_MG5.jpg",
    imageCredit: "Boevaya mashina · CC BY-SA 3.0",
    specs: [
      ["Kaliber", "7,62 × 51 mm NATO"],
      ["Gewicht", "ca. 12,4 kg einsatznah"],
      ["Rohrlänge", "550 mm (MG5)"],
      ["Zuführung", "Munitionsgurt"],
      ["Kadenz", "640 / 720 / 800 Schuss/min"],
      ["Wirkbereich", "ca. 600 m vom Zweibein"],
      ["Visierung", "Optik mit Rotpunkt"],
      ["System", "Gasdrucklader"]
    ],
    source: "https://www.bundeswehr.de/de/ausruestung-technik-bundeswehr/ausruestung-bewaffnung/mg5",
    video: "https://www.bundeswehr.de/de/mediathek/60sekunden-maschinengewehr-mg5-168422"
  },
  {
    id: "pzf3",
    name: "Panzerfaust 3",
    type: "Panzerabwehrhandwaffe",
    accent: "#98420f",
    accentSoft: "#e9c19f",
    summary: "Schultergestützte, ungelenkte Panzerabwehrwaffe aus vorgefülltem Rohr und wiederverwendbarer Abfeuereinrichtung. Varianten unterscheiden sich.",
    image: "Panzerfaust3_noBG.png",
    imageCredit: "Sonaz · Wikimedia Commons",
    specs: [
      ["Rohrkaliber", "60 mm"],
      ["Gefechtskopf", "110 mm"],
      ["Gewicht", "ca. 15,2 kg, variantenabhängig"],
      ["System", "Rückstoßarm / ungelenkt"],
      ["Ziele stehend", "bis ca. 400 m"],
      ["Ziele fahrend", "bis ca. 300 m"],
      ["Komponenten", "Rohr + Abfeuereinrichtung"],
      ["Ausführung", "mehrere Varianten"]
    ],
    source: "https://www.bundeswehr.de/de/ausruestung-technik-bundeswehr/ausruestung-bewaffnung/panzerfaust-3",
    video: "https://www.bundeswehr.de/de/mediathek/60-sekunden-panzerfaust-3-107520"
  }
];

const natoAlphabet = [
  ["A", "Alfa"], ["B", "Bravo"], ["C", "Charlie"], ["D", "Delta"],
  ["E", "Echo"], ["F", "Foxtrot"], ["G", "Golf"], ["H", "Hotel"],
  ["I", "India"], ["J", "Juliett"], ["K", "Kilo"], ["L", "Lima"],
  ["M", "Mike"], ["N", "November"], ["O", "Oscar"], ["P", "Papa"],
  ["Q", "Quebec"], ["R", "Romeo"], ["S", "Sierra"], ["T", "Tango"],
  ["U", "Uniform"], ["V", "Victor"], ["W", "Whiskey"], ["X", "X-ray"],
  ["Y", "Yankee"], ["Z", "Zulu"]
];

const natoDistractors = {
  A: ["Atlas", "Aragon", "Apollo"],
  B: ["Berlin", "Bison", "Baker"],
  C: ["Cobra", "Caesar", "Comet"],
  D: ["Dingo", "Dover", "Dragon"],
  E: ["Eagle", "Elbe", "Europa"],
  F: ["Falcon", "Frankfurt", "Fjord"],
  G: ["Gamma", "Gloria", "Greif"],
  H: ["Harbor", "Hektor", "Hunter"],
  I: ["Ikarus", "Insel", "Iris"],
  J: ["Jäger", "Jupiter", "Jumbo"],
  K: ["Kaiser", "Kobra", "Komet"],
  L: ["London", "Löwe", "Lotus"],
  M: ["Martha", "Meteor", "Munich"],
  N: ["Neptun", "Nora", "Nord"],
  O: ["Omega", "Orion", "Otter"],
  P: ["Paris", "Phoenix", "Peter"],
  Q: ["Quarz", "Quirin", "Quelle"],
  R: ["Ranger", "Rudolf", "Rhein"],
  S: ["Samson", "Saturn", "Signal"],
  T: ["Tiger", "Theodor", "Titan"],
  U: ["Uranus", "Ulrich", "Union"],
  V: ["Vega", "Vulkan", "Venus"],
  W: ["Walter", "Wolfram", "Weser"],
  X: ["Xenon", "Xaver", "Xylophon"],
  Y: ["Ypsilon", "York", "Yukon"],
  Z: ["Zeppelin", "Zebra", "Zorn"]
};

const ranks = [
  { name: "Soldat / Schütze", group: "Mannschaften", code: "M", file: "Dienstgrad_Bundeswehr_Heer_001_Soldat.svg", note: "Niedrigster Dienstgrad; die Bezeichnung richtet sich nach der Truppengattung." },
  { name: "Gefreiter", group: "Mannschaften", code: "M", file: "Dienstgrad_Bundeswehr_Heer_011_Gefreiter.svg", note: "Dienstgrad der Mannschaften." },
  { name: "Obergefreiter", group: "Mannschaften", code: "M", file: "Dienstgrad_Bundeswehr_Heer_021_Obergefreiter.svg", note: "Dienstgrad der Mannschaften." },
  { name: "Hauptgefreiter", group: "Mannschaften", code: "M", file: "Dienstgrad_Bundeswehr_Heer_031_Hauptgefreiter.svg", note: "Dienstgrad der Mannschaften." },
  { name: "Stabsgefreiter", group: "Mannschaften", code: "M", file: "Dienstgrad_Bundeswehr_Heer_041_Stabsgefreiter.svg", note: "Dienstgrad der Mannschaften." },
  { name: "Oberstabsgefreiter", group: "Mannschaften", code: "M", file: "Dienstgrad_Bundeswehr_Heer_051_Oberstabsgefreiter.svg", note: "Dienstgrad der Mannschaften." },
  { name: "Korporal", group: "Mannschaften", code: "M", file: "Dienstgrad_Bundeswehr_Heer_Korporal.svg", note: "Herausgehobener Dienstgrad der Mannschaften." },
  { name: "Stabskorporal", group: "Mannschaften", code: "M", file: "Dienstgrad_Bundeswehr_Heer_Stabskorporal.svg", note: "Höchster Dienstgrad der Mannschaften." },

  { name: "Fahnenjunker", group: "Anwärterdienstgrade", subgroup: "Offizieranwärter · Unteroffiziere ohne Portepee", code: "OA", file: "Dienstgrad_Bundeswehr_Heer_114_Fahnenjunker.svg", note: "Das Abzeichen entspricht dem Unteroffizier und wird durch die silberfarbene OA-Litze ergänzt." },
  { name: "Fähnrich", group: "Anwärterdienstgrade", subgroup: "Offizieranwärter · Unteroffiziere mit Portepee", code: "OA", file: "Dienstgrad_Bundeswehr_Heer_134_Faehnrich.svg", note: "Das Abzeichen entspricht dem Feldwebel und wird durch die silberfarbene OA-Litze ergänzt." },
  { name: "Oberfähnrich", group: "Anwärterdienstgrade", subgroup: "Offizieranwärter · Unteroffiziere mit Portepee", code: "OA", file: "Dienstgrad_Bundeswehr_Heer_154_Oberfaehnrich.svg", note: "Eigener Offizieranwärterdienstgrad vor dem Leutnant; erkennbar an Abzeichen und silberfarbener OA-Litze." },

  { name: "Unteroffizier", group: "Unteroffiziere", subgroup: "Ohne Portepee", code: "UoP", file: "Dienstgrad_Bundeswehr_Heer_111_Unteroffizier.svg", note: "Einstiegsdienstgrad der Unteroffiziere ohne Portepee." },
  { name: "Stabsunteroffizier", group: "Unteroffiziere", subgroup: "Ohne Portepee", code: "UoP", file: "Dienstgrad_Bundeswehr_Heer_121_Stabsunteroffizier.svg", note: "Höchster Dienstgrad der Unteroffiziere ohne Portepee." },
  { name: "Feldwebel", group: "Unteroffiziere", subgroup: "Mit Portepee", code: "UmP", file: "Dienstgrad_Bundeswehr_Heer_131_Feldwebel.svg", note: "Erster regulärer Feldwebeldienstgrad." },
  { name: "Oberfeldwebel", group: "Unteroffiziere", subgroup: "Mit Portepee", code: "UmP", file: "Dienstgrad_Bundeswehr_Heer_141_Oberfeldwebel.svg", note: "Dienstgrad der Feldwebellaufbahn." },
  { name: "Hauptfeldwebel", group: "Unteroffiziere", subgroup: "Mit Portepee", code: "UmP", file: "Dienstgrad_Bundeswehr_Heer_151_Hauptfeldwebel.svg", note: "Dienstgrad der Feldwebellaufbahn." },
  { name: "Stabsfeldwebel", group: "Unteroffiziere", subgroup: "Mit Portepee", code: "UmP", file: "Dienstgrad_Bundeswehr_Heer_161_Stabsfeldwebel.svg", note: "Hoher Dienstgrad der Feldwebellaufbahn." },
  { name: "Oberstabsfeldwebel", group: "Unteroffiziere", subgroup: "Mit Portepee", code: "UmP", file: "Dienstgrad_Bundeswehr_Heer_171_Oberstabsfeldwebel.svg", note: "Höchster regulärer Feldwebeldienstgrad." },

  { name: "Leutnant", group: "Offiziere", code: "Offz", file: "Dienstgrad_Bundeswehr_Heer_211_Leutnant.svg", note: "Erster Offizierdienstgrad." },
  { name: "Oberleutnant", group: "Offiziere", code: "Offz", file: "Dienstgrad_Bundeswehr_Heer_221_Oberleutnant.svg", note: "Zweiter Offizierdienstgrad." },
  { name: "Hauptmann", group: "Offiziere", code: "Offz", file: "Dienstgrad_Bundeswehr_Heer_231_Hauptmann.svg", note: "Offizierdienstgrad der Hauptleute." },
  { name: "Stabshauptmann", group: "Offiziere", code: "Offz", file: "Dienstgrad_Bundeswehr_Heer_241_Stabshauptmann.svg", note: "Höchster Dienstgrad der Laufbahn der Offiziere des militärfachlichen Dienstes." },
  { name: "Major", group: "Offiziere", code: "Offz", file: "Dienstgrad_Bundeswehr_Heer_251_Major.svg", note: "Erster Stabsoffizierdienstgrad." },
  { name: "Oberstleutnant", group: "Offiziere", code: "Offz", file: "Dienstgrad_Bundeswehr_Heer_261_Oberstleutnant.svg", note: "Stabsoffizierdienstgrad." },
  { name: "Oberst", group: "Offiziere", code: "Offz", file: "Dienstgrad_Bundeswehr_Heer_271_Oberst.svg", note: "Höchster Stabsoffizierdienstgrad." },

  { name: "Brigadegeneral", group: "Generale", code: "Gen", file: "Dienstgrad_Bundeswehr_Heer_311_Brigadegeneral.svg", note: "Niedrigster Generalsdienstgrad; ein Stern." },
  { name: "Generalmajor", group: "Generale", code: "Gen", file: "Dienstgrad_Bundeswehr_Heer_321_Generalmajor.svg", note: "Generalsdienstgrad; zwei Sterne." },
  { name: "Generalleutnant", group: "Generale", code: "Gen", file: "Dienstgrad_Bundeswehr_Heer_331_Generalleutnant.svg", note: "Generalsdienstgrad; drei Sterne." },
  { name: "General", group: "Generale", code: "Gen", file: "Dienstgrad_Bundeswehr_Heer_341_General.svg", note: "Höchster Dienstgrad der Bundeswehr; vier Sterne." }
];

// Reines Nachschlagewerk: Diese Abzeichen bleiben bewusst außerhalb aller
// Fragenpools der Dienstbeginn-Challenge und des Dienstgrad-Drills.
const supplementalRankMedia = {
  "Sanitätssoldat": { src: commonsFile("Dienstgrad_Bundeswehr_Heer_001_Soldat.svg"), variant: "Aufschiebeschlaufe · Grundform" },
  "Stabsarzt": { src: commonsFile("HA OS5 43b Stabsarzt San HM L.svg"), variant: "Aufschiebeschlaufe · Humanmedizin" },
  "Stabsapotheker": { src: commonsFile("HA OS5 43d Stabsapotheker San PH L.svg"), variant: "Aufschiebeschlaufe · Pharmazie" },
  "Stabsveterinär": { src: commonsFile("HA OS5 43e Stabsveterinär San TM L.svg"), variant: "Aufschiebeschlaufe · Veterinärmedizin" },
  "Oberstabsarzt": { src: commonsFile("HA OS5 51b Oberstabsarzt San HM L.svg"), variant: "Aufschiebeschlaufe · Humanmedizin" },
  "Oberstabsapotheker": { src: commonsFile("HA OS5 51d Oberstabsapotheker San PH L.svg"), variant: "Aufschiebeschlaufe · Pharmazie" },
  "Oberstabsveterinär": { src: commonsFile("HA OS5 51e Oberstabsveterinär San TM L.svg"), variant: "Aufschiebeschlaufe · Veterinärmedizin" },
  "Oberfeldarzt": { src: commonsFile("HA OS5 52b Oberfeldarzt San HM L.svg"), variant: "Aufschiebeschlaufe · Humanmedizin" },
  "Flottillenarzt": { src: commonsFile("MDS 52b Flottillenarzt San HM L.svg"), variant: "Marine-Schulterklappe · Humanmedizin" },
  "Oberfeldapotheker": { src: commonsFile("HA OS5 52d Oberfeldapotheker San PH L.svg"), variant: "Aufschiebeschlaufe · Pharmazie" },
  "Flottillenapotheker": { src: commonsFile("MDS 52d Flottillenapotheker San PH L.svg"), variant: "Marine-Schulterklappe · Pharmazie" },
  "Oberfeldveterinär": { src: commonsFile("HA OS5 52e Oberfeldveterinär San TM L.svg"), variant: "Aufschiebeschlaufe · Veterinärmedizin" },
  "Oberstarzt": { src: commonsFile("HA OS5 53b Oberstarzt San HM L.svg"), variant: "Aufschiebeschlaufe · Humanmedizin" },
  "Flottenarzt": { src: commonsFile("MDS 53b Flottenarzt San HM L.svg"), variant: "Marine-Schulterklappe · Humanmedizin" },
  "Oberstapotheker": { src: commonsFile("HA OS5 53d Oberstapotheker San PH L.svg"), variant: "Aufschiebeschlaufe · Pharmazie" },
  "Flottenapotheker": { src: commonsFile("MDS 53d Flottenapotheker San PH L.svg"), variant: "Marine-Schulterklappe · Pharmazie" },
  "Oberstveterinär": { src: commonsFile("HA OS5 53e Oberstveterinär San TM L.svg"), variant: "Aufschiebeschlaufe · Veterinärmedizin" },
  "Generalarzt": { src: commonsFile("HA OS5 61b Generalarzt HM L.svg"), variant: "Aufschiebeschlaufe · Humanmedizin" },
  "Admiralarzt": { src: commonsFile("MDS 61b Admiralarzt San HM L.svg"), variant: "Marine-Schulterklappe · Humanmedizin" },
  "Generalapotheker": { src: commonsFile("HA OS5 61d Generalapotheker PH L.svg"), variant: "Aufschiebeschlaufe · Pharmazie" },
  "Generalstabsarzt": { src: commonsFile("HA OS5 62b Generalstabsarzt HM L.svg"), variant: "Aufschiebeschlaufe · Humanmedizin" },
  "Admiralstabsarzt": { src: commonsFile("MDS 62b Admiralstabsarzt San HM L.svg"), variant: "Marine-Schulterklappe · Humanmedizin" },
  "Generaloberstabsarzt": { src: commonsFile("HA OS5 63b Generaloberstabsarzt HM L.svg"), variant: "Aufschiebeschlaufe · Humanmedizin" },
  "Admiraloberstabsarzt": { src: commonsFile("MDS 63b Admiraloberstabsarzt San HM L.svg"), variant: "Marine-Schulterklappe · Humanmedizin" },

  "Matrose": { src: "https://www.bundeswehr.de/resource/image/76612/landscape_ratio16x9/200/113/907b7b03f2fd8d0348486d7f7776d0d4/F66C2932F223577662A25F9B2F99BCC1/dienstgradabzeichen-marine-matrose-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Gefreiter": { src: "https://www.bundeswehr.de/resource/image/76616/landscape_ratio16x9/200/113/129253db253ecddf7d74a091127f88f9/56F0D1F94E1B4EFE06B0DF0F178A376B/dienstgradabzeichen-marine-gefreiter-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Obergefreiter": { src: "https://www.bundeswehr.de/resource/image/76914/landscape_ratio16x9/200/113/93ac98f1f7d2b278c541aef6b7a29f61/DD4D50D9E6834DB74FB0C9AA8367BF74/dienstgradabzeichen-marine-obergefreiter-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Hauptgefreiter": { src: "https://www.bundeswehr.de/resource/image/76928/landscape_ratio16x9/200/113/a147551f75ca4fa4739e9e2814fb09f9/9B52A1E81101FFC5546CADD1B50184C1/dienstgradabzeichen-marine-hauptgefreiter-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Stabsgefreiter": { src: "https://www.bundeswehr.de/resource/image/76932/landscape_ratio16x9/200/113/d3e560db30d346c7460180b770cb394c/4701FFE0DB84A00FCE37586932B50964/dienstgradabzeichen-marine-stabsgefreiter-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Oberstabsgefreiter": { src: "https://www.bundeswehr.de/resource/image/76938/landscape_ratio16x9/200/113/52d64ffc5b78a3a5df1cf57df66640e6/D9E97BB8E4A11EF1B637F05333A59FBE/dienstgradabzeichen-marine-oberstabsgefreiter-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Korporal": { src: "https://www.bundeswehr.de/resource/image/5295066/landscape_ratio16x9/200/113/b5270b0010ae2bc94bf1796d7bc279cc/D140A2869510D453F5DD87D83E44FFB5/dienstgradabzeichen-marine-korporal-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Stabskorporal": { src: "https://www.bundeswehr.de/resource/image/5295064/landscape_ratio16x9/200/113/7d556746ddbc34202d03850656ae1809/977736E0D09866600B782CB68DB9DABB/dienstgradabzeichen-marine-stabskorporal-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Maat": { src: "https://www.bundeswehr.de/resource/image/82286/landscape_ratio16x9/200/113/512143bfe3aa5bb68a055213d09acb1c/7674CD6A79ACC9F4E8A5E2EA03B1DBD7/dienstgradabzeichen-marine-maat-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Obermaat": { src: "https://www.bundeswehr.de/resource/image/5462290/landscape_ratio16x9/200/113/4ca303d0883c5da682a7c905de9808c9/8E431269DEA697A368235054BD50E38F/dienstgradabzeichen-marine-obermaat-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Seekadett": { src: "https://www.bundeswehr.de/resource/image/84844/landscape_ratio16x9/200/113/8e1205e1000f21c0ea530f921cb37334/5D636AF2D29A41B77CB2230B48897752/dienstgradabzeichen-marine-seekadett-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Fähnrich zur See": { src: "https://www.bundeswehr.de/resource/image/159766/landscape_ratio16x9/200/113/5e75f2ce0a73685251a01473142252b3/8B40F07BFA4266470E0691388FE6B495/dienstgradabzeichen-marine-faehnrich-zur-see-offizieranwaerter-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug · OA" },
  "Oberfähnrich zur See": { src: "https://www.bundeswehr.de/resource/image/159786/landscape_ratio16x9/200/113/7390c844872c8cf2de48052339658f7d/A6DB1552DC7460C208FD411FFC839BD9/dienstgradabzeichen-marine-oberfaehnrich-zur-see-offizieranwaerter-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug · OA" },
  "Bootsmann": { src: "https://www.bundeswehr.de/resource/image/159762/landscape_ratio16x9/200/113/50cd90cda0b446ce9fc49e345bfc4161/7F15772D55168A201BC1DEC20E49B595/dienstgradabzeichen-marine-bootsmann-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Oberbootsmann": { src: "https://www.bundeswehr.de/resource/image/159770/landscape_ratio16x9/200/113/3c8a669828d911482530845c7f7e48c2/60A6F5F6D5C876DA73DE3FFC16B5FA6E/dienstgradabzeichen-marine-oberbootsmann-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Hauptbootsmann": { src: "https://www.bundeswehr.de/resource/image/159774/landscape_ratio16x9/200/113/d701b72b00e1dcdc9e9ecfde1214e317/7D9E4BCDA8EDB2A6FEA69170EB3D4575/dienstgradabzeichen-marine-hauptbootsmann-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Stabsbootsmann": { src: "https://www.bundeswehr.de/resource/image/159778/landscape_ratio16x9/200/113/2fe0f84185cc944dca8e3e2a8a185eac/C8CA9F5EA7B8F2C8E9961A981553CFA8/dienstgradabzeichen-marine-stabsbootsmann-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Oberstabsbootsmann": { src: "https://www.bundeswehr.de/resource/image/159782/landscape_ratio16x9/200/113/6ef5ddb475fdfff4c87b2c5cff4f5a26/C3D0C135AD0844114C6431267E0EFB89/dienstgradabzeichen-marine-oberstabsbootsmann-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Leutnant zur See": { src: "https://www.bundeswehr.de/resource/image/87860/landscape_ratio16x9/200/113/96128fb0828bcace7ea5c5d6677fddaa/AED2C93112D1777A8D63C1096CE72849/dienstgradabzeichen-marine-leutnant-zur-see-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Oberleutnant zur See": { src: "https://www.bundeswehr.de/resource/image/87868/landscape_ratio16x9/200/113/e6ff2333a6fdecc2c2ae364271aefc49/301B39A73A81D5E9446BA2E05D2FD89C/dienstgradabzeichen-marine-oberleutnant-zur-see-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Kapitänleutnant": { src: "https://www.bundeswehr.de/resource/image/87878/landscape_ratio16x9/200/113/24c8b66ec3d9a383c17ed89857e7e420/8F0C69E19FFE33DE977988AC473507D4/dienstgradabzeichen-marine-kapitaenleutnant-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Stabskapitänleutnant": { src: "https://www.bundeswehr.de/resource/image/87882/landscape_ratio16x9/200/113/3a7983a739e974fa6b74d9f3ac03ca42/DE5702551D16E7E26F721FE59F9A3C1A/dienstgradabzeichen-marine-stabskapitaenleutnant-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Korvettenkapitän": { src: "https://www.bundeswehr.de/resource/image/87890/landscape_ratio16x9/200/113/8b7135648e22baaf382f298f25888b97/71FB3D540B0546B013BB3EA2E49D987F/dienstgradabzeichen-marine-korvettenkapitaen-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Fregattenkapitän": { src: "https://www.bundeswehr.de/resource/image/88078/landscape_ratio16x9/200/113/4a7deb849652849059578c7b03ffc78d/858701BF5C3F03FC39F39573C9D3AC0C/dienstgradabzeichen-marine-fregattenkapitaen-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Kapitän zur See": { src: "https://www.bundeswehr.de/resource/image/88084/landscape_ratio16x9/200/113/ed24a2ef132100de6fca268e35333d83/F13E4B5984341799242A28A0E1194659/dienstgradabzeichen-marine-kapita-n-zur-see-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Flottillenadmiral": { src: "https://www.bundeswehr.de/resource/image/88088/landscape_ratio16x9/200/113/2d17de5340ba23177479dfd132a1a62a/878711C965BA399BDF15E49D5C486009/dienstgradabzeichen-marine-flotillenadmiral-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Konteradmiral": { src: "https://www.bundeswehr.de/resource/image/88108/landscape_ratio16x9/200/113/d6c5b0b9f85ebfd23841d54dc7e74005/63BCF40D0DE8F972FD37ABBF5A22292C/dienstgradabzeichen-marine-konteradmiral-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Vizeadmiral": { src: "https://www.bundeswehr.de/resource/image/88112/landscape_ratio16x9/200/113/8ecbf3096dad9eb26670bbfb5d49648b/CA6A651195AA12EC37E24DEB57954E9B/dienstgradabzeichen-marine-vizeadmiral-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" },
  "Admiral": { src: "https://www.bundeswehr.de/resource/image/88126/landscape_ratio16x9/200/113/7907c693c33f7fcb4fbd413b9b884ed7/7CB9F7B49D4CA9AD104BBD019B1385B7/dienstgradabzeichen-marine-admiral-gefechtsanzug.jpg", variant: "Bord- und Gefechtsanzug" }
};

const medicalRankGroups = [
  {
    title: "Mannschaften",
    subtitle: "Niedrigster Dienstgrad",
    items: [
      { name: "Sanitätssoldat", code: "San", note: "Niedrigster Mannschaftsdienstgrad im Sanitätsdienst. Die weiteren Mannschaftsdienstgrade tragen die allgemeinen Bezeichnungen Gefreiter bis Stabskorporal." }
    ]
  },
  {
    title: "Sanitätsoffiziere · Hauptleute",
    subtitle: "Entsprechend Hauptmann beziehungsweise Kapitänleutnant",
    items: [
      { name: "Stabsarzt", code: "SanOffz", note: "Human- oder Zahnmedizin; gehört zur Dienstgradgruppe der Hauptleute." },
      { name: "Stabsapotheker", code: "SanOffz", note: "Pharmazie; gehört zur Dienstgradgruppe der Hauptleute." },
      { name: "Stabsveterinär", code: "SanOffz", note: "Veterinärmedizin; gehört zur Dienstgradgruppe der Hauptleute." }
    ]
  },
  {
    title: "Sanitätsoffiziere · Stabsoffiziere I",
    subtitle: "Entsprechend Major beziehungsweise Korvettenkapitän",
    items: [
      { name: "Oberstabsarzt", code: "SanOffz", note: "Human- oder Zahnmedizin; erster sanitätsdienstlicher Dienstgrad dieser Stabsoffizierstufe." },
      { name: "Oberstabsapotheker", code: "SanOffz", note: "Pharmazie; entspricht der Dienstgradstufe Major beziehungsweise Korvettenkapitän." },
      { name: "Oberstabsveterinär", code: "SanOffz", note: "Veterinärmedizin; entspricht der Dienstgradstufe Major beziehungsweise Korvettenkapitän." }
    ]
  },
  {
    title: "Sanitätsoffiziere · Stabsoffiziere II",
    subtitle: "Entsprechend Oberstleutnant beziehungsweise Fregattenkapitän",
    items: [
      { name: "Oberfeldarzt", code: "SanOffz", note: "Human- oder Zahnmedizin; Bezeichnung für Heer- und Luftwaffenuniformträger." },
      { name: "Flottillenarzt", code: "SanOffz M", note: "Human- oder Zahnmedizin; entsprechende Marinebezeichnung." },
      { name: "Oberfeldapotheker", code: "SanOffz", note: "Pharmazie; Bezeichnung für Heer- und Luftwaffenuniformträger." },
      { name: "Flottillenapotheker", code: "SanOffz M", note: "Pharmazie; entsprechende Marinebezeichnung." },
      { name: "Oberfeldveterinär", code: "SanOffz", note: "Veterinärmedizin; entspricht der Dienstgradstufe Oberstleutnant beziehungsweise Fregattenkapitän." }
    ]
  },
  {
    title: "Sanitätsoffiziere · Stabsoffiziere III",
    subtitle: "Entsprechend Oberst beziehungsweise Kapitän zur See",
    items: [
      { name: "Oberstarzt", code: "SanOffz", note: "Human- oder Zahnmedizin; Bezeichnung für Heer- und Luftwaffenuniformträger." },
      { name: "Flottenarzt", code: "SanOffz M", note: "Human- oder Zahnmedizin; entsprechende Marinebezeichnung." },
      { name: "Oberstapotheker", code: "SanOffz", note: "Pharmazie; Bezeichnung für Heer- und Luftwaffenuniformträger." },
      { name: "Flottenapotheker", code: "SanOffz M", note: "Pharmazie; entsprechende Marinebezeichnung." },
      { name: "Oberstveterinär", code: "SanOffz", note: "Veterinärmedizin; entspricht der Dienstgradstufe Oberst beziehungsweise Kapitän zur See." }
    ]
  },
  {
    title: "Sanitätsoffiziere · Generale und Admirale I",
    subtitle: "Entsprechend Brigadegeneral beziehungsweise Flottillenadmiral",
    items: [
      { name: "Generalarzt", code: "GenSan", note: "Human- oder Zahnmedizin; erster sanitätsdienstlicher Generalsdienstgrad." },
      { name: "Admiralarzt", code: "AdmSan", note: "Human- oder Zahnmedizin; entsprechende Marinebezeichnung." },
      { name: "Generalapotheker", code: "GenSan", note: "Pharmazie; gehört zur ersten sanitätsdienstlichen Generalsstufe." }
    ]
  },
  {
    title: "Sanitätsoffiziere · Generale und Admirale II",
    subtitle: "Entsprechend Generalmajor beziehungsweise Konteradmiral",
    items: [
      { name: "Generalstabsarzt", code: "GenSan", note: "Sanitätsdienstlicher Generalsdienstgrad für Heer- und Luftwaffenuniformträger." },
      { name: "Admiralstabsarzt", code: "AdmSan", note: "Entsprechender sanitätsdienstlicher Admiralsdienstgrad der Marine." }
    ]
  },
  {
    title: "Sanitätsoffiziere · Generale und Admirale III",
    subtitle: "Entsprechend Generalleutnant beziehungsweise Vizeadmiral",
    items: [
      { name: "Generaloberstabsarzt", code: "GenSan", note: "Höchster sanitätsdienstlicher Generalsdienstgrad für Heer- und Luftwaffenuniformträger." },
      { name: "Admiraloberstabsarzt", code: "AdmSan", note: "Höchster sanitätsdienstlicher Admiralsdienstgrad der Marine." }
    ]
  }
];

const navyRankGroups = [
  {
    title: "Mannschaften",
    subtitle: "Acht Dienstgrade",
    items: [
      { name: "Matrose", code: "M", note: "Niedrigster Marinedienstgrad; ohne Dienstgradabzeichen." },
      { name: "Gefreiter", code: "M", note: "Ein Schrägstreifen auf beiden Oberärmeln." },
      { name: "Obergefreiter", code: "M", note: "Zwei Schrägstreifen auf beiden Oberärmeln." },
      { name: "Hauptgefreiter", code: "M", note: "Drei Schrägstreifen auf beiden Oberärmeln." },
      { name: "Stabsgefreiter", code: "M", note: "Vier Schrägstreifen auf beiden Oberärmeln." },
      { name: "Oberstabsgefreiter", code: "M", note: "Fünf Schrägstreifen auf beiden Oberärmeln." },
      { name: "Korporal", code: "M", note: "Ein breiter Schrägstreifen auf beiden Oberärmeln." },
      { name: "Stabskorporal", code: "M", note: "Ein breiter und ein schmaler Schrägstreifen auf beiden Oberärmeln." }
    ]
  },
  {
    title: "Unteroffiziere ohne Portepee",
    subtitle: "Maaten",
    items: [
      { name: "Maat", code: "UoP", note: "Zwei einander gegenübergestellte Winkel auf beiden Oberärmeln." },
      { name: "Obermaat", code: "UoP", note: "Abzeichen wie Maat, ergänzt um einen zweiten oberen Winkel." }
    ]
  },
  {
    title: "Offizieranwärterdienstgrade",
    subtitle: "Drei eigene Marinebezeichnungen",
    items: [
      { name: "Seekadett", code: "OA", note: "Offizieranwärterdienstgrad; Dienstgradabzeichen wie beim Maat." },
      { name: "Fähnrich zur See", code: "OA", note: "Offizieranwärterdienstgrad; Dienstgradabzeichen wie beim Bootsmann." },
      { name: "Oberfähnrich zur See", code: "OA", note: "Offizieranwärterdienstgrad; ein schmaler umlaufender Streifen auf beiden Unterärmeln." }
    ]
  },
  {
    title: "Unteroffiziere mit Portepee",
    subtitle: "Bootsleute",
    items: [
      { name: "Bootsmann", code: "UmP", note: "Ein nach oben weisender Winkel auf beiden Unterärmeln." },
      { name: "Oberbootsmann", code: "UmP", note: "Zwei nach oben weisende Winkel auf beiden Unterärmeln." },
      { name: "Hauptbootsmann", code: "UmP", note: "Ein Kopfwinkel mit der Spitze nach oben auf beiden Unterärmeln." },
      { name: "Stabsbootsmann", code: "UmP", note: "Ein Kopfwinkel und darunter ein nach oben weisender Winkel." },
      { name: "Oberstabsbootsmann", code: "UmP", note: "Abzeichen wie Stabsbootsmann, jedoch mit zwei unteren Winkeln." }
    ]
  },
  {
    title: "Offiziere",
    subtitle: "Leutnante, Hauptleute und Stabsoffiziere",
    items: [
      { name: "Leutnant zur See", code: "Offz", note: "Ein mittelbreiter umlaufender Streifen auf beiden Unterärmeln." },
      { name: "Oberleutnant zur See", code: "Offz", note: "Zwei mittelbreite umlaufende Streifen auf beiden Unterärmeln." },
      { name: "Kapitänleutnant", code: "Offz", note: "Zwei mittelbreite Streifen mit einem schmalen Streifen dazwischen." },
      { name: "Stabskapitänleutnant", code: "Offz", note: "Zwei mittelbreite Streifen mit zwei schmalen Streifen dazwischen." },
      { name: "Korvettenkapitän", code: "Offz", note: "Drei mittelbreite umlaufende Streifen auf beiden Unterärmeln." },
      { name: "Fregattenkapitän", code: "Offz", note: "Drei mittelbreite Streifen; zwischen oberem und mittlerem liegt ein schmaler Streifen." },
      { name: "Kapitän zur See", code: "Offz", note: "Vier mittelbreite umlaufende Streifen auf beiden Unterärmeln." }
    ]
  },
  {
    title: "Admirale",
    subtitle: "Vier Admiralsdienstgrade",
    items: [
      { name: "Flottillenadmiral", code: "Adm", note: "Ein handbreiter und darüber ein schmaler umlaufender Streifen." },
      { name: "Konteradmiral", code: "Adm", note: "Ein handbreiter und darüber ein mittelbreiter umlaufender Streifen." },
      { name: "Vizeadmiral", code: "Adm", note: "Ein handbreiter und darüber zwei mittelbreite umlaufende Streifen." },
      { name: "Admiral", code: "Adm", note: "Ein handbreiter und darüber drei mittelbreite umlaufende Streifen." }
    ]
  }
];

const branches = [
  { name: "Artillerietruppe", badge: "Gekreuzte Kanonenrohre im Eichenlaubkranz", litzen: "Hochrot", color: "#e32636", beret: "Korallenrot", beretColor: "#a94652", file: "Barettabzeichen_Artillerietruppe_Bw.jpg", note: "Indirekte Feuerunterstützung und Aufklärung im Wirkverbund." },
  { name: "Panzertruppe", badge: "Stilisierter Kampfpanzer im Eichenlaubkranz", litzen: "Rosa", color: "#ef8ea4", beret: "Schwarz", beretColor: "#171717", file: "Barettabzeichen_Panzertruppe_Bw.jpg", note: "Gepanzerter Kampf mit Kampfpanzern." },
  { name: "Panzergrenadiertruppe", badge: "Schützenpanzer und gekreuzte Gewehre im Eichenlaubkranz", litzen: "Jägergrün", color: "#177245", beret: "Jägergrün", beretColor: "#177245", file: "Barettabzeichen_Panzergrenadiertruppe_Bw.jpg", note: "Abgesessener und aufgesessener Kampf mit Schützenpanzern." },
  { name: "Jägertruppe", badge: "Drei Eichenblätter mit Eicheln im Eichenlaubkranz", litzen: "Jägergrün", color: "#177245", beret: "Jägergrün", beretColor: "#177245", file: "Barettabzeichen_Jägertruppe_Bw.jpg", note: "Infanteristischer Kampf, besonders in urbanem und bedecktem Gelände." },
  { name: "Fallschirmjägertruppe", badge: "Stürzender Adler im Eichenlaubkranz", litzen: "Jägergrün", color: "#177245", beret: "Bordeauxrot", beretColor: "#651f36", file: "Barettabzeichen_Fallschirmjäger_Bw.jpg", note: "Luftlandefähige Infanterie für schnelle Operationen." },
  { name: "Kommando Spezialkräfte (KSK)", badge: "Aufgerichtetes Schwert im Eichenlaubkranz", litzen: "Je nach Truppengattung", color: "#6d716f", beret: "Bordeauxrot", beretColor: "#651f36", image: "ksk-barettabzeichen.jpg", local: true, status: "Sonderverband", note: "Das KSK ist ein Sonderverband des Heeres und keine eigene Truppengattung. Die Litzen richten sich nach der jeweiligen Truppengattungszugehörigkeit." },
  { name: "Gebirgsjägertruppe", badge: "Jägerabzeichen; zusätzlich Edelweiß", litzen: "Jägergrün", color: "#177245", beret: "Jägergrün, wenn ein Barett getragen wird", beretColor: "#177245", file: "Barettabzeichen_Gebirgsjäger_Bw.jpg", note: "In festgelegten Gebirgstruppenteilen wird meist die Bergmütze mit Edelweiß statt eines Baretts getragen." },
  { name: "Heeresaufklärungstruppe", badge: "Gekreuzte Reiterlanzen im Eichenlaubkranz", litzen: "Goldgelb", color: "#e8a317", beret: "Schwarz", beretColor: "#171717", file: "Barettabzeichen_Heeresaufklärungstruppe_Bw.jpg", note: "Gewinnt Informationen über Kräfte, Gelände und Lage." },
  { name: "Fernmeldetruppe", badge: "Blitz im Eichenlaubkranz", litzen: "Zitronengelb", color: "#e7dc38", beret: "Korallenrot", beretColor: "#a94652", file: "Barettabzeichen_Fernmeldetruppe_Bw.jpg", note: "Stellt Führungsfähigkeit und Informationsverbindungen sicher." },
  { name: "Heeresfliegertruppe", badge: "Schwinge, von einem Schwert gekreuzt, im Eichenlaubkranz", litzen: "Hellgrau", color: "#9aa0a2", beret: "Bordeauxrot", beretColor: "#651f36", file: "Barettabzeichen_Heeresfliegertruppe_Bw.jpg", note: "Luftbeweglichkeit, Transport, Aufklärung und Wirkung aus der Luft." },
  { name: "Heeresflugabwehrtruppe", badge: "Gekreuzte Kanonenrohre und Flugabwehrrakete im Eichenlaubkranz", litzen: "Korallenrot", color: "#a94652", beret: "Korallenrot", beretColor: "#a94652", file: "BW_Barettabzeichen_Heeresflugabwehrtruppe.png", status: "Neuaufstellung", note: "Schutz landgebundener Kräfte vor Bedrohungen aus der Luft. Der Aufstellungsstab arbeitet seit 2025; das erste Bataillon soll bis 2028 aufgestellt werden." },
  { name: "Pioniertruppe", badge: "Stilisierte Brücke im Eichenlaubkranz", litzen: "Schwarz", color: "#151515", beret: "Korallenrot", beretColor: "#a94652", file: "Barettabzeichen_Pioniertruppe_Bw.jpg", note: "Fördert eigene Bewegung, hemmt gegnerische Bewegung und erhöht Schutz." },
  { name: "Heereslogistiktruppe", badge: "Geflügelter Hermesstab vor Eisenbahnrad im Eichenlaubkranz", litzen: "Mittelblau", color: "#1559a2", beret: "Korallenrot", beretColor: "#a94652", file: "Barettabzeichen_Nachschubtruppe_Bw.jpg", note: "Versorgung, Transport und Materialbewirtschaftung." },
  { name: "Instandsetzung", badge: "Werkzeuge, Zahnrad und Kanonenrohr im Eichenlaubkranz", litzen: "Mittelblau", color: "#1559a2", beret: "Korallenrot", beretColor: "#a94652", file: "Barettabzeichen_Instandsetzungstruppe_Bw.jpg", note: "Instandsetzungskräfte gehören heute zu den Heereslogistiktruppen und erhalten die materielle Einsatzbereitschaft." },
  { name: "Sanitätsdienst Heer", badge: "Äskulapstab im Eichenlaubkranz", litzen: "Dunkelblau", color: "#1b3f8a", beret: "Kobaltblau", beretColor: "#315a78", file: "Barettabzeichen_Sanitätstruppe_Bw.jpg", note: "Medizinische Versorgung und sanitätsdienstliche Unterstützung." },
  { name: "Feldjägertruppe", badge: "Preußischer Gardestern mit der Aufschrift „Suum Cuique“", litzen: "Orange", color: "#ee6c22", beret: "Korallenrot", beretColor: "#a94652", image: "feldjaeger-barettabzeichen.jpeg", local: true, note: "Militärpolizeiliche Aufgaben im In- und Ausland." },
  { name: "ABC-Abwehrtruppe", badge: "Gekreuzte Retorten und Eichenblatt im Eichenlaubkranz", litzen: "Bordeauxrot", color: "#651f36", beret: "Korallenrot", beretColor: "#a94652", file: "Barettabzeichen_ABC-Abwehrtruppe_Bw.jpg", note: "Schutz, Aufklärung und Dekontamination bei ABC-Gefahren." },
  { name: "Militärmusikdienst", badge: "Lyra im Eichenlaubkranz", litzen: "Weiß", color: "#f2efe5", beret: "Je nach Musikkorps oder Unterstellung", beretColor: "#dedad3", file: "Barettabzeichen_Heeresmusikkorps_Bw.jpg", note: "Die Barettfarbe kann je nach Musikkorps beziehungsweise Unterstellung grün, bordeauxrot, schwarz oder korallenrot sein." },
  { name: "Cyber- und Informationsraum (CIR)", badge: "Globus, Blitz und Schild mit der Aufschrift CIR im Eichenlaubkranz", litzen: "Je nach Truppengattung beziehungsweise Fachbereich", color: "#536a7a", beret: "Marineblau", beretColor: "#172a46", image: "cir-barettabzeichen.jpg", local: true, status: "Teilstreitkraft", note: "CIR ist seit 2024 eine eigene Teilstreitkraft und keine Truppengattung des Heeres. Soldatinnen und Soldaten des CIR tragen das marineblaue Barett mit diesem Abzeichen." }
];

const organizationGroups = [
  {
    title: "Teilstreitkräfte",
    note: "Antippen, um Truppengattungen, Großverbände oder Fähigkeitsbereiche zu öffnen.",
    items: [
      {
        symbol: "H", name: "Heer", color: "#b20d22",
        note: "Landstreitkräfte der Bundeswehr; führt Operationen vor allem in der Dimension Land.",
        detailTitle: "10 Truppengattungen",
        details: [
          ["Panzertruppen", "Panzertruppe und Panzergrenadiertruppe"],
          ["Infanterie", "Jäger-, Gebirgsjäger- und Fallschirmjägertruppe"],
          ["Heeresaufklärungstruppe", "Aufklärung von Kräften, Gelände und Lage"],
          ["Pioniertruppe", "Bewegung, Hemmung und Schutz"],
          ["Heeresfliegertruppe", "Luftbeweglichkeit, Transport und Wirkung"],
          ["Artillerietruppe", "Indirekte Feuerunterstützung und Aufklärung"],
          ["Heereslogistiktruppe", "Versorgung, Transport und Instandsetzung"],
          ["Spezialkräfte", "Besonders befähigte Kräfte für spezielle Aufträge"],
          ["Fernmeldetruppe", "Führungsfähigkeit und Informationsverbindungen"],
          ["Sanitätsdienst des Heeres", "Sanitätsdienstliche Unterstützung im Heer"]
        ],
        source: "https://www.bundeswehr.de/de/organisation/heer"
      },
      {
        symbol: "LW", name: "Luftwaffe", color: "#315a78",
        note: "Verantwortet den Schutz und die Wirkung in Luft und Weltraum.",
        detailTitle: "Fähigkeitsbereiche",
        details: [
          ["Fliegende Einsatzverbände", "Kampfflugzeuge sowie Aufklärungs- und Unterstützungsfähigkeiten"],
          ["Lufttransport", "Transportflugzeuge, Hubschrauber und Flugbereitschaft"],
          ["Bodengebundene Luftverteidigung", "Flugabwehrraketen und Schutz vor Bedrohungen aus der Luft"],
          ["Einsatzführungsdienst", "Überwachung und Führung im Luftraum"],
          ["Weltraum", "Lagebild und Unterstützung weltraumgestützter Fähigkeiten"],
          ["Objektschutz", "Schutz von Personal, Material und Einsatzbasen"],
          ["Technik & Logistik", "Erhalt der materiellen Einsatzbereitschaft"],
          ["Ausbildung", "Schulen und lehrgangsgebundene Qualifizierung"]
        ],
        source: "https://www.bundeswehr.de/de/organisation/luftwaffe"
      },
      {
        symbol: "M", name: "Marine", color: "#123b5d",
        note: "Seestreitkräfte für Schutz, Präsenz und Wirkung im maritimen Raum.",
        detailTitle: "Großverbände & Bereiche",
        details: [
          ["Flotte", "Einsatzflottille 1, Einsatzflottille 2 und Marinefliegerkommando"],
          ["Unterstützungskräfte", "Marineunterstützungskommando, Schifffahrtmedizinisches Institut, Truppenbesuchszentrum und Einsatzausbildungszentrum Schadensabwehr"],
          ["Marineschulen", "Marineschule Mürwik, Marineunteroffizierschule, Marineoperationsschule und Marinetechnikschule"],
          ["Besondere Einrichtungen", "DEU MARFOR, COE CSW und Marineschifffahrtleitung"]
        ],
        source: "https://www.bundeswehr.de/de/organisation/marine/struktur"
      },
      {
        symbol: "CIR", name: "Cyber- und Informationsraum", color: "#00677f",
        note: "Vierte Teilstreitkraft seit 2024; wirkt im Cyber- und Informationsraum sowie dimensionsübergreifend.",
        detailTitle: "Fähigkeitsbereiche",
        details: [
          ["IT-Services & Betrieb", "Sichere, belastbare IT für die Bundeswehr"],
          ["Cyberverteidigung", "Schutz und Verteidigung militärischer IT-Systeme"],
          ["Elektronischer Kampf", "Wirkung im elektromagnetischen Spektrum"],
          ["Operative Kommunikation", "Kommunikative Wirkung im Einsatzumfeld"],
          ["Weltraumunterstützung", "Führungsunterstützung aus dem Weltraum"],
          ["Nachrichtenwesen", "Lagebilder, Aufklärung und Auswertung"],
          ["Geoinformationsdienst", "Raumbezogene Daten und Beratung"],
          ["Ausbildung", "Ausbildungszentrum Cyber- und Informationsraum"]
        ],
        source: "https://www.bundeswehr.de/de/organisation/cyber-und-informationsraum"
      }
    ]
  },
  {
    title: "Führung & Unterstützung",
    note: "Gemeinsame Fähigkeiten werden zentral gebündelt und dimensionsübergreifend geführt.",
    items: [
      {
        symbol: "Ustg", name: "Unterstützungsbereich", color: "#5b626a",
        note: "Bündelt gemeinsame Unterstützungsfähigkeiten für die gesamte Bundeswehr.",
        detailTitle: "Kommandos & Dienststellen",
        details: [
          ["Unterstützungskommando der Bundeswehr", "Führung des Unterstützungsbereichs"],
          ["Kommando Gesundheitsversorgung", "Gesundheitsversorgung der Bundeswehr"],
          ["ABC-Abwehrkommando", "Abwehr atomarer, biologischer und chemischer Gefahren"],
          ["Logistikkommando", "Logistische Unterstützung der Streitkräfte"],
          ["Kommando Feldjäger", "Militärpolizeiliche Aufgaben"],
          ["Streitkräfteamt", "Zentrale streitkräftegemeinsame Aufgaben"],
          ["Kommando Zivil-Militärische Zusammenarbeit", "Zusammenarbeit mit zivilen Stellen"],
          ["Multinationales Kommando Operative Führung", "Multinationale Führungsfähigkeit"],
          ["Planungsamt", "Strategische Planung und Weiterentwicklung"],
          ["Bundesakademie für Sicherheitspolitik", "Sicherheitspolitische Weiterbildung"]
        ],
        source: "https://www.bundeswehr.de/de/organisation/unterstuetzungsbereich"
      },
      {
        symbol: "OpFü", name: "Operatives Führungskommando", color: "#34363b",
        note: "Plant und führt die Einsätze der Bundeswehr im In- und Ausland aus einer Hand.",
        detailTitle: "Aufgaben & Elemente",
        details: [
          ["Nationale Operationsplanung", "Militärische Planung auf strategisch-operativer Ebene"],
          ["Einsatzführung Ausland", "Führung laufender Einsätze und Missionen"],
          ["Territoriale Führung", "Landes- und Bündnisverteidigung in Deutschland"],
          ["Landeskommandos", "Verbindung zu Ländern und zivilen Behörden"],
          ["Amts- und Katastrophenhilfe", "Militärische Unterstützung im Inland auf Anforderung"],
          ["Multinationale Koordination", "Zusammenarbeit mit NATO, EU und Partnern"]
        ],
        source: "https://www.bundeswehr.de/de/organisation/operatives-fuehrungskommando-der-bundeswehr"
      }
    ]
  },
  {
    title: "Zivile Organisationsbereiche",
    note: "Die zivile Bundeswehrverwaltung unterstützt Personal, Material, Infrastruktur und den rechtlichen Rahmen.",
    items: [
      {
        symbol: "P", name: "Personal", color: "#8c1727", note: "Gewinnung, Entwicklung, Betreuung und Verwaltung des Personals.",
        detailTitle: "Aufgabenbereiche",
        details: [["Personalgewinnung", "Karriereberatung und Einstellung"], ["Personalführung", "Verwendung und Entwicklung"], ["Bildung & Qualifizierung", "Aus-, Fort- und Weiterbildung"], ["Berufsförderung", "Übergang in das zivile Berufsleben"]],
        source: "https://www.bundeswehr.de/de/organisation/personal"
      },
      {
        symbol: "AIN", name: "Ausrüstung, Informationstechnik und Nutzung", color: "#4d5d6c", note: "Beschaffung, technische Betreuung und Nutzung von Material und IT.",
        detailTitle: "Aufgabenbereiche",
        details: [["Bedarf & Beschaffung", "Ausrüstung für die Streitkräfte"], ["Projektmanagement", "Steuerung komplexer Rüstungsvorhaben"], ["Nutzungsmanagement", "Betreuung von Material im Betrieb"], ["Informationstechnik", "Beschaffung und Betreuung von IT-Ausstattung"]],
        source: "https://www.bundeswehr.de/de/organisation/ausruestung-baainbw"
      },
      {
        symbol: "IUD", name: "Infrastruktur, Umweltschutz und Dienstleistungen", color: "#6a5a45", note: "Liegenschaften, Bau, Umweltschutz und zentrale Dienstleistungen.",
        detailTitle: "Aufgabenbereiche",
        details: [["Infrastruktur", "Planen, Bauen und Betreiben von Liegenschaften"], ["Umweltschutz", "Umwelt- und Naturschutzaufgaben"], ["Dienstleistungen", "Verpflegung, Betreuung und Service"], ["Facility Management", "Bewirtschaftung militärischer Liegenschaften"]],
        source: "https://www.bundeswehr.de/de/organisation/infrastruktur-umweltschutz-und-dienstleistungen"
      },
      {
        symbol: "§", name: "Rechtspflege", color: "#4b4b50", note: "Rechtsberatung und Rechtspflege innerhalb der Bundeswehr.",
        detailTitle: "Aufgabenbereiche",
        details: [["Rechtsberatung", "Beratung militärischer Dienststellen"], ["Wehrdisziplinarwesen", "Bearbeitung disziplinarrechtlicher Verfahren"], ["Truppendienstgerichte", "Unabhängige gerichtliche Kontrolle"]],
        source: "https://www.bundeswehr.de/de/organisation/rechtspflege"
      },
      {
        symbol: "+", name: "Militärseelsorge", color: "#315a78", note: "Seelsorge und vertrauliche Begleitung für Soldatinnen und Soldaten.",
        detailTitle: "Angebote",
        details: [["Seelsorgegespräche", "Vertrauliche Begleitung in persönlichen Fragen"], ["Lebenskundlicher Unterricht", "Orientierung und ethische Reflexion"], ["Gottesdienste & Begleitung", "Religiöse Angebote im Grundbetrieb und Einsatz"], ["Krisenbegleitung", "Unterstützung in belastenden Situationen"]],
        source: "https://www.bundeswehr.de/de/organisation/militaerseelsorge"
      }
    ]
  },
  {
    title: "Weitere zentrale Dienststellen",
    note: "Diese Dienststellen sind dem Verteidigungsministerium unmittelbar nachgeordnet.",
    items: [
      { symbol: "FüAk", name: "Führungsakademie der Bundeswehr", color: "#37474f", note: "Höchste militärische Ausbildungseinrichtung der Bundeswehr.", detailTitle: "Schwerpunkte", details: [["Lehrgänge", "Aus- und Weiterbildung militärischer Führungskräfte"], ["Sicherheitspolitik", "Gemeinsames Lernen und strategischer Austausch"]], source: "https://www.bundeswehr.de/de/organisation/fuehrungsakademie-der-bundeswehr" },
      { symbol: "ZInFü", name: "Zentrum Innere Führung", color: "#981426", note: "Zentrale Einrichtung für Innere Führung und soldatisches Selbstverständnis.", detailTitle: "Schwerpunkte", details: [["Innere Führung", "Weiterentwicklung und Vermittlung des Leitbilds"], ["Politische Bildung", "Demokratische Orientierung"], ["Führungskultur", "Beratung und Qualifizierung"]], source: "https://www.bundeswehr.de/de/organisation/zentrum-innere-fuehrung" },
      { symbol: "MAD", name: "Militärischer Abschirmdienst", color: "#27272b", note: "Nachrichtendienstlicher Schutz der Bundeswehr.", detailTitle: "Aufgabenfelder", details: [["Spionageabwehr", "Schutz vor nachrichtendienstlichen Angriffen"], ["Extremismusabwehr", "Erkennen sicherheitsgefährdender Bestrebungen"], ["Sabotageabwehr", "Schutz der Einsatzbereitschaft"]], source: "https://www.bundeswehr.de/de/organisation/mad-bundesamt-fuer-den-militaerischen-abschirmdienst" }
    ]
  }
];

const knots = [
  {
    id: "schnuersenkel", name: "Schnürsenkel binden", type: "Grundlage", video: "TD_7oTmz7SY", file: "Red shoelace.jpg",
    note: "Die klassische Schleife – sicher gebunden und ohne lange, lose Enden.",
    steps: [
      ["Enden ausgleichen", "Den Schuh bequem festziehen und beide Schnürsenkel ungefähr gleich lang ausrichten."],
      ["Grundknoten", "Die Enden überkreuzen. Ein Ende unter dem anderen hindurchführen und beide Seiten festziehen."],
      ["Erste Schlaufe", "Aus einem Ende eine kleine Schlaufe legen und sie unten zwischen Daumen und Zeigefinger festhalten."],
      ["Herumführen", "Das freie Ende einmal um die erste Schlaufe legen. Dabei entsteht eine kleine Öffnung."],
      ["Zweite Schlaufe", "Eine Bucht des freien Endes durch die Öffnung schieben, ohne das ganze Ende hindurchzuziehen."],
      ["Festziehen", "Beide Schlaufen gleichmäßig auseinanderziehen. Schlaufen und Enden so kurz einstellen, dass nichts über den Boden schleift."]
    ],
    tip: "Für zusätzlichen Halt können beide Schlaufen noch einmal miteinander verknotet werden."
  },
  {
    id: "palstek", name: "Palstek", type: "Knoten", video: "OSxTEvacDzE", file: "Palstek innen.jpg",
    note: "Bildet eine feste Schlaufe, die sich unter Zug nicht zuzieht.",
    steps: [
      ["Enden bestimmen", "Das belastete lange Seil ist die feste Part, das kurze Arbeitsende ist die lose Part."],
      ["Auge legen", "In die feste Part ein kleines Auge legen. Die lose Part soll das Auge bequem erreichen."],
      ["Durch das Auge", "Die lose Part von unten durch das kleine Auge führen."],
      ["Um die feste Part", "Die lose Part hinter der festen Part herumführen."],
      ["Zurückführen", "Die lose Part von oben wieder durch das kleine Auge stecken."],
      ["Ordnen und prüfen", "An Schlaufe und fester Part gleichmäßig festziehen. Der Knoten muss sauber liegen und das freie Ende ausreichend lang bleiben."]
    ],
    tip: "Merksatz: aus dem Teich, um den Baum und wieder zurück in den Teich."
  },
  {
    id: "doppelter-bulinknoten", name: "Doppelter Bulinknoten", type: "Knoten", video: "Tq7vSfpcYF4", file: "Doublebowline.jpg",
    note: "Feste, belastbare Schlaufe; lässt sich nach Belastung häufig gut lösen.",
    steps: [
      ["Zwei Augen legen", "In die feste Part zwei gleich große, parallel liegende Augen legen."],
      ["Lose Part durchführen", "Die lose Part von unten durch beide Augen führen."],
      ["Feste Part umrunden", "Die lose Part einmal vollständig hinter der festen Part herumführen."],
      ["Durch beide Augen zurück", "Die lose Part von oben wieder durch beide Augen führen."],
      ["Knoten ordnen", "Alle Parten nebeneinanderlegen; nichts darf sich unnötig kreuzen oder verdrehen."],
      ["Festziehen und sichern", "Schlaufe und feste Part gleichmäßig belasten und das freie Ende nach Vorgabe der Ausbildung sichern."]
    ],
    tip: "Die beiden Augen müssen gemeinsam erfasst werden; sonst entsteht nicht die doppelte Ausführung."
  },
  {
    localImage: "sackstich.webp", id: "sackstich", name: "Sackstich", type: "Knoten", video: "WVPuy2pmmt8", file: "Overhand-loop-ABOK-1046.jpg",
    note: "Einfacher Grundknoten, hier als Schlaufe mit einer Seilbucht gezeigt.",
    steps: [
      ["Bucht bilden", "Das Seil doppelt nehmen und eine ausreichend große Bucht bilden."],
      ["Auge legen", "Mit der doppelten Part ein Auge wie bei einem einfachen Überhandknoten legen."],
      ["Bucht durchführen", "Die geschlossene Bucht vollständig durch das Auge führen."],
      ["Parten ordnen", "Beide Seilstränge parallel und ohne Verdrehung nebeneinanderlegen."],
      ["Festziehen", "An der Schlaufe und an beiden Seilsträngen gleichmäßig ziehen und das Knotenbild prüfen."]
    ],
    tip: "Nach starker Belastung kann sich der Sackstich nur schwer lösen lassen."
  },
  {
    id: "kreuzknoten", name: "Kreuzknoten", type: "Knoten", video: "pt7RxYkfmbo", file: "Knot-square-ABoK 1204-USCG.jpg",
    note: "Verbindet zwei gleichartige und gleich starke Leinen für einfache, nicht sicherheitskritische Aufgaben.",
    steps: [
      ["Leinenenden fassen", "Je ein freies Ende in eine Hand nehmen. Beide Leinen sollen ungefähr gleich stark und ähnlich beschaffen sein."],
      ["Ersten halben Knoten legen", "Das rechte Ende über das linke führen, darunter hindurchstecken und beide Enden leicht anziehen."],
      ["Zweiten halben Knoten gegenläufig legen", "Die Enden erneut kreuzen. Dabei das Ende, das beim ersten Schlag oben lag, wieder oben führen und darunter hindurchstecken."],
      ["Knoten ordnen", "Die beiden Buchten flach nebeneinanderlegen und alle vier Parten gleichmäßig anziehen."],
      ["Knotenbild prüfen", "Die beiden kurzen Enden müssen auf derselben Seite liegen. Der Knoten soll symmetrisch und ohne unnötige Verdrehung aussehen."]
    ],
    tip: "Merksatz: Was oben war, bleibt oben. Zwei gleichgerichtete halbe Knoten ergeben keinen Kreuzknoten. Nicht zur Personensicherung oder für sicherheitskritische Lasten verwenden.",
    source: "https://www.nlbk.niedersachsen.de/download/147644",
    sourceLabel: "NLBK: Leitfaden Knoten"
  },
  {
    id: "achterknoten", name: "Achterknoten", type: "Knoten", video: "26AXO_DFb7s", file: "Figure eight knot.JPG",
    note: "Ein gut erkennbarer Stopperknoten, der ein Seilende am Durchrutschen hindern kann.",
    steps: [
      ["Freies Ende bemessen", "Genügend loses Ende stehen lassen, damit der Knoten vollständig gelegt und anschließend sicher geprüft werden kann."],
      ["Auge legen", "Die lose Part über die feste Part führen und dadurch ein deutliches Auge bilden."],
      ["Feste Part umrunden", "Die lose Part einmal vollständig hinter der festen Part herumführen."],
      ["Durch das Auge führen", "Das freie Ende von vorn durch das zuerst gelegte Auge stecken. Die Seilführung ähnelt nun einer Acht."],
      ["Knoten ordnen", "Alle Parten sauber nebeneinanderlegen und Verdrehungen herausnehmen."],
      ["Festziehen und prüfen", "An fester und loser Part gleichmäßig ziehen. Knotenbild und Länge des freien Endes kontrollieren."]
    ],
    tip: "Der einfache Achterknoten ist hier als Stopperknoten gezeigt; er ist keine fertige Schlaufe zur Personensicherung."
  },
  {
    id: "rundtoern", name: "Rundtörn mit zwei Halbschlägen", type: "Knoten", video: "R4QmqASpWkM", file: "Anderthalb Rundtörn mit zwei halben Schlägen.jpg",
    note: "Befestigt ein Seil an Ring, Stange oder Pfosten; der Rundtörn nimmt Zug auf.",
    steps: [
      ["Erster Umlauf", "Die lose Part einmal vollständig um Ring, Stange oder Pfosten führen."],
      ["Rundtörn vollenden", "Einen zweiten Umlauf in gleicher Richtung legen. Beide Törns liegen sauber nebeneinander."],
      ["Erster Halbschlag", "Die lose Part um die feste Part legen, durch das entstandene Auge führen und anziehen."],
      ["Zweiter Halbschlag", "Den gleichen Schritt unmittelbar dahinter in derselben Richtung wiederholen."],
      ["Prüfen", "Törns und Halbschläge zusammenschieben, festziehen und auf ein ausreichend langes freies Ende achten."]
    ],
    tip: "Der Rundtörn nimmt bereits Last auf; die beiden Halbschläge sichern die Befestigung."
  },
  {
    id: "mastwurf", name: "Mastwurf", type: "Knoten", video: "nw0U4DSR4-A", file: "Clove Hitch - ABoK 11 - USCG.jpg",
    note: "Schnelle Befestigung an Stangen oder Pfosten; lässt sich leicht nachstellen.",
    steps: [
      ["Ersten Törn legen", "Die lose Part einmal um die Stange führen."],
      ["Parten kreuzen", "Die lose Part schräg über die feste Part führen."],
      ["Zweiten Törn legen", "Die lose Part ein zweites Mal in derselben Richtung um die Stange führen."],
      ["Unterstecken", "Das freie Ende unter der zuletzt entstandenen Kreuzung hindurchschieben."],
      ["Ordnen und prüfen", "Beide Enden gegeneinander festziehen. Die beiden Törns und die Kreuzung müssen sauber anliegen."]
    ],
    tip: "Bei wechselnder oder kritischer Belastung nur mit der in der Ausbildung vorgegebenen Zusatzsicherung verwenden."
  },
  {
    id: "doppelter-ankerstich", name: "Doppelter Ankerstich", type: "Knoten", video: "-GoZTe8U9Hk", file: "Doppelter ankerstich.jpg",
    note: "Dient vorrangig zum Befestigen und Führen von Ausrüstung sowie zum Anschlagen von Band- oder Rundschlingen.",
    steps: [
      ["Leine doppelt greifen", "Die Leine so doppelt nehmen, dass eine ausreichend große, geschlossene Schlaufe entsteht."],
      ["Schlaufe umlegen", "Die Schlaufe über die beiden parallel verlaufenden Leinen legen."],
      ["Seitliche Schlaufen bilden", "Die beiden entstehenden Schlaufen gleichmäßig herausarbeiten und zusammenführen."],
      ["Knoten ordnen", "Alle Leinenabschnitte parallel ausrichten; Kreuzungen und Verdrehungen vermeiden."],
      ["Fixieren und festziehen", "Beide Seiten gleichmäßig anziehen und den fertigen Knoten vor der Verwendung prüfen."],
      ["Belastung beachten", "Nur entsprechend der praktischen Einweisung einsetzen und bei Bedarf mit einem Spierenstich sichern."]
    ],
    tip: "Der doppelte Ankerstich zieht sich unter Belastung zu und lockert sich bei Entlastung. Wird nur eine Seite belastet, kann er sich lösen.",
    source: "https://www.feuerwehr-lernbar.bayern/api/media/4569/raw/Doppelter%20Ankerstich%20-%20gelegt.pdf?version=1",
    sourceLabel: "Feuerwehr-Lernbar: Doppelter Ankerstich"
  },
  {
    id: "slipstek", name: "Slipstek", type: "Knoten", video: "t1tF0oUb2kI", file: "SlipKnot.jpg",
    note: "Schnell lösbare, vorübergehende Befestigung mit auf Slip gelegtem Ende.",
    steps: [
      ["Bucht legen", "Aus der losen Part eine kleine Bucht bilden; das freie Ende bleibt erreichbar."],
      ["Auge bilden", "Mit der festen Part ein Auge um den Gegenstand beziehungsweise an der vorgesehenen Stelle legen."],
      ["Bucht durchstecken", "Nur die Bucht – nicht das ganze freie Ende – durch das Auge schieben."],
      ["Festziehen", "An der festen Part ziehen, bis sich das Auge um die Bucht schließt."],
      ["Lösen", "Nur im unbelasteten Zustand am freien Ende ziehen. Die eingesteckte Bucht gleitet dann aus dem Auge."]
    ],
    tip: "Ein Slipstek ist für ein schnelles Lösen gedacht und nicht für unbeaufsichtigte oder sicherheitskritische Lasten."
  },
  {
    id: "einfacher-schotstek", name: "Einfacher Schotstek", type: "Knoten", video: "SP3vMCnGyQg", file: "Sheet bend.jpg",
    note: "Verbindet zwei Leinen; besonders zweckmäßig, wenn sie unterschiedlich stark sind.",
    steps: [
      ["Bucht in die stärkere Leine legen", "Mit der stärkeren oder steiferen Leine eine offene Bucht bilden und beide Schenkel zusammenhalten."],
      ["Dünnere Leine durchführen", "Die lose Part der dünneren Leine von unten durch die Bucht führen."],
      ["Bucht umrunden", "Die dünnere Leine außen um beide Schenkel der Bucht herumführen."],
      ["Unter die eigene Part stecken", "Das freie Ende unter der eigenen Part hindurchführen; es wird nicht zurück durch die Bucht gesteckt."],
      ["Ordnen und prüfen", "Alle Parten festziehen. Die beiden freien Enden sollen auf derselben Seite des Knotens liegen und ausreichend lang bleiben."]
    ],
    tip: "Die stärkere Leine bildet die Bucht, die dünnere arbeitet. Bei größerer Belastung oder glattem Material ist der doppelte Schotstek die zweckmäßigere Variante. Nicht zur Personensicherung verwenden.",
    source: "https://www.nlbk.niedersachsen.de/download/147644",
    sourceLabel: "NLBK: Leitfaden Knoten"
  },
  {
    id: "doppelter-schotstek", name: "Doppelter Schotstek", type: "Knoten", video: "U-33BbpJ_ug", file: "Doppelter Schotstek.jpg",
    note: "Verbindet zwei Leinen unterschiedlicher Stärke oder Beschaffenheit.",
    steps: [
      ["Bucht legen", "Mit dem stärkeren oder steiferen Seil eine offene Bucht bilden."],
      ["Von unten durchführen", "Die lose Part des dünneren Seils von unten durch die Bucht führen."],
      ["Erster Umlauf", "Die lose Part außen um beide Schenkel der Bucht herumführen."],
      ["Zweiter Umlauf", "Einen zweiten Umlauf direkt neben dem ersten legen."],
      ["Unterstecken", "Das freie Ende unter beiden eigenen Umläufen hindurchführen – nicht zurück durch die Bucht."],
      ["Ordnen und prüfen", "Alle Parten festziehen. Die beiden freien Enden sollen auf derselben Seite des Knotens liegen."]
    ],
    tip: "Der doppelte Umlauf gibt bei glattem oder deutlich dünnerem Seil mehr Halt als der einfache Schotstek."
  },
  {
    id: "doppelter-spierenstich", name: "Doppelter Spierenstich", type: "Knoten", video: "zfmZOUFu-I0", file: "Doppelter Spierenstich zugezogen.jpg",
    note: "Verbindet zwei gleichartige Leinenenden formschlüssig und eignet sich auch zum Schließen einer Reepschnurschlinge.",
    steps: [
      ["Enden überlappen", "Beide Leinenenden in entgegengesetzter Richtung parallel nebeneinanderlegen und ausreichend Überstand lassen."],
      ["Erste zwei Wicklungen", "Mit dem ersten freien Ende zwei saubere Wicklungen um die andere Leine legen."],
      ["Erstes Ende zurückführen", "Das freie Ende entgegen der Wickelrichtung durch beide eigenen Wicklungen führen und den Teilknoten locker anziehen."],
      ["Zweiten Teilknoten legen", "Mit dem anderen freien Ende spiegelbildlich ebenfalls zwei Wicklungen legen und das Ende durch diese zurückführen."],
      ["Knoten ordnen", "Beide Teilknoten sauber ausrichten; die Wicklungen liegen jeweils parallel und die freien Enden bleiben ausreichend lang."],
      ["Zusammenziehen und prüfen", "An den beiden festen Parten ziehen, bis die Teilknoten dicht gegeneinanderliegen. Anschließend das gesamte Knotenbild prüfen."]
    ],
    tip: "Nur für zueinander passende Leinen verwenden. Nach hoher Belastung lässt sich der Knoten häufig nur schwer lösen.",
    source: "https://www.alpenverein.at/portal/news/2022/2022_04_22_knoten-videos.php",
    sourceLabel: "Österreichischer Alpenverein: Spierenstich"
  },
  {
    id: "zimmermannsschlag", name: "Zimmermannsschlag", type: "Knoten", video: "WsCU86SDfb4", file: "Timber Hitch Final.jpg",
    note: "Vorübergehende Befestigung zum Ziehen von Stangen, Balken oder Rundholz bei gleichmäßigem Zug.",
    steps: [
      ["Gegenstand umschlingen", "Die lose Part vollständig um die Stange oder das Rundholz führen."],
      ["Feste Part kreuzen", "Die lose Part über die feste Part führen und anschließend zurück in die entstandene große Schlaufe legen."],
      ["Erste Windung", "Das freie Ende innerhalb der Schlaufe um die eigene lose Part wickeln."],
      ["Weitere Windungen", "Mindestens zwei weitere gleichmäßige Windungen in derselben Richtung anlegen."],
      ["Zum Gegenstand schieben", "Die Windungen ordnen und den Knoten dicht an Stange oder Rundholz heranschieben."],
      ["Langsam belasten und prüfen", "Zug nur über die feste Part aufbauen. Sitz, Zugrichtung und ausreichend langes freies Ende kontrollieren."]
    ],
    tip: "Der Zimmermannsschlag hält durch gleichmäßigen Zug. Bei Entlastung oder wechselnder Zugrichtung kann er sich lockern."
  },
  {
    id: "kreuzbund", name: "Kreuzbund", type: "Bund", video: "wITCzerenEw", file: "Square Lashing.jpg",
    note: "Verbindet zwei Stangen stabil miteinander, typischerweise in einem rechten Winkel.",
    steps: [
      ["Stangen ausrichten", "Beide Stangen im gewünschten Winkel übereinanderlegen und gegen Verrutschen sichern."],
      ["Anfang befestigen", "Das Seil mit einem Mastwurf an der tragenden Stange befestigen; das freie Ende bleibt ausreichend lang."],
      ["Wicklungen legen", "Drei bis vier straffe Wicklungen abwechselnd über die obere und unter die untere Stange führen."],
      ["Knebelgänge", "Zwischen den Stangen zwei bis drei straffe Knebelgänge um die bisherigen Wicklungen legen."],
      ["Abschluss", "Den Bund mit einem Mastwurf an einer Stange abschließen."],
      ["Prüfen", "Wicklungen ordnen und beide Stangen auf festen Sitz und den vorgesehenen Winkel prüfen."]
    ],
    tip: "Die Knebelgänge ziehen die Wicklungen zusammen und geben dem Bund seine Festigkeit."
  },
  {
    id: "diagonalbund", name: "Diagonalbund", type: "Bund", video: "L-fF4BG0rlk", file: "Lashing diagonal.jpg",
    note: "Verbindet schräg kreuzende Stangen und zieht sie an der Kreuzungsstelle zusammen.",
    steps: [
      ["Stangen ausrichten", "Die Stangen im vorgesehenen Winkel kreuzen und die spätere Belastungsrichtung berücksichtigen."],
      ["Anfang befestigen", "Das Seil mit einem Zimmermannsschlag um beide Stangen an der Kreuzungsstelle befestigen und festziehen."],
      ["Erste Diagonale wickeln", "Drei bis vier straffe Wicklungen in einer Diagonalrichtung um beide Stangen legen."],
      ["Zweite Diagonale wickeln", "Drei bis vier Wicklungen in der anderen Diagonalrichtung ergänzen, sodass ein X entsteht."],
      ["Knebelgänge legen", "Zwischen den Stangen zwei bis drei straffe Knebelgänge um sämtliche Wicklungen führen."],
      ["Abschließen und prüfen", "Den Bund mit einem Mastwurf an einer Stange beenden. Wicklungen, Winkel und festen Sitz kontrollieren."]
    ],
    tip: "Der Diagonalbund eignet sich besonders für schräge Verstrebungen; bei rechtwinklig aufeinanderliegenden Stangen ist meist der Kreuzbund passender."
  },
  {
    id: "schleuderbund", name: "Schleuderbund", type: "Bund", file: "Schleuderbund Tonnensteg.jpg",
    note: "Verspannt Pfahlgruppen oder Stapelhölzer, wenn sie nicht mit Draht verbunden werden.",
    steps: [
      ["Rundhölzer vorbereiten", "Die Rundholzenden auf gleiche Höhe legen und die Hölzer während des Bindens gegen Verrutschen sichern."],
      ["Bundstelle festlegen", "Die Bundstelle ungefähr 50 Zentimeter unterhalb des kürzesten Zopfendes markieren."],
      ["Mit Mastwurf beginnen", "Die Arbeitsleine mit einem Mastwurf an einem Rundholz befestigen. Der Mastwurf liegt unterhalb der folgenden Rundschläge."],
      ["Rundschläge legen", "Mindestens fünf straffe Rundschläge um beide Hölzer führen und jede Lage einzeln fest anziehen."],
      ["Rundschläge sichern", "Auf der gegenüberliegenden Seite das Arbeitsende mit Halbschlägen um die Rundschläge legen und festziehen."],
      ["Bund prüfen", "Leinenführung, festen Sitz und ausreichend lange freie Enden kontrollieren. Erst danach die Fixierung der Hölzer lösen."]
    ],
    tip: "Der Schleuderbund wird unter Vorspannung gefertigt. Aufbau, Belastungsrichtung und Verwendung müssen vor Ort praktisch eingewiesen und geprüft werden.",
    source: "https://thw-jugend.de/wp-content/uploads/2020/10/LA-BUND_Anlage8.5_Praktische-Aufgaben_V3.3.pdf",
    sourceLabel: "THW-Jugend: Praktische Aufgaben"
  },
  {
    id: "dreibockbund", name: "Dreibockbund", type: "Bund", video: "xe8udClG0o8", file: "Shear-lashing-3pole.jpg",
    note: "Verbindet drei parallel liegende Rundhölzer, die anschließend zu einem Dreibock aufgestellt werden können.",
    steps: [
      ["Rundhölzer vorbereiten", "Drei Rundhölzer parallel und am unteren Stammende auf gleicher Höhe ausrichten. Zwischen den Hölzern etwa drei Viertel ihrer Stärke Abstand lassen."],
      ["Anfang befestigen", "Den Bund ungefähr 50 Zentimeter unterhalb des Kopfendes mit einem Mastwurf und einem Halbschlag in Zugrichtung beginnen."],
      ["Achterschläge legen", "Mindestens sechs feste Achterschläge eng nebeneinander um die drei Rundhölzer führen."],
      ["Zwischenräume wickeln", "Die Wicklungen zwischen den Bockbeinen stramm anziehen und am ersten sowie am mittleren Bockbein jeweils einen Würgeschlag legen."],
      ["Bund abschließen", "Mit einem Mastwurf und einem Halbschlag beenden. Den vollständigen Bund auf gleichmäßige Führung und festen Sitz prüfen."],
      ["Bockbeine kreuzen", "Zum Öffnen das mittlere Bockbein anheben und die beiden äußeren darunter kreuzen. Aufrichten und Sichern erfolgen ausschließlich nach praktischer Einweisung und auf Kommando."]
    ],
    tip: "Der Bund allein macht noch keinen einsatzbereiten Dreibock. Aufrichten, Ausrichten, Anschlagmittel und Sicherung der Beine sind eigene Ausbildungsschritte.",
    source: "https://ov-woerth.thw.de/fileadmin/user_upload/LVBY/GSTR/OWOE/Mediathek/Ausbildungsmaterial/Instruktionsblatt_Dreibock.pdf",
    sourceLabel: "THW: Instruktionsblatt Dreibockbund"
  },
  {
    id: "bockschnuerbund", name: "Bockschnürbund", type: "Bund", video: "j7trAdWm18U", file: "Shear lashing 0 Thumb.jpg",
    note: "Verbindet zwei Stangen, die anschließend zu einem Bock auseinandergespreizt werden.",
    steps: [
      ["Stangen parallel legen", "Beide Stangen nebeneinanderlegen; ihre späteren Fußenden zeigen in dieselbe Richtung."],
      ["Anfang befestigen", "Das Seil mit einem Mastwurf an einer Stange befestigen."],
      ["Wicklungen legen", "Sechs bis acht gleichmäßige, zunächst nicht zu straffe Wicklungen um beide Stangen legen."],
      ["Knebelgänge", "Zwischen den Stangen zwei bis drei straffe Knebelgänge um die Wicklungen führen."],
      ["Abschluss", "Den Bund mit einem Mastwurf an der zweiten Stange beenden."],
      ["Bock öffnen und prüfen", "Die Stangen vorsichtig zum Bock auseinanderspreizen. Bund, Stand und Belastungsrichtung kontrollieren."]
    ],
    tip: "Die ersten Wicklungen brauchen genug Spiel, damit sich die Stangen anschließend öffnen lassen."
  }
];

const serviceContacts = [
  { icon: "CH", name: "Batteriechef (BttrChef)", note: "Dienstliche Telefonnummer", number: "0151 57950253", href: "tel:+4915157950253", tone: "service" },
  { icon: "FW", name: "Batteriefeldwebel (BttrFw) · „Spieß“", note: "Dienstliche Telefonnummer", number: "0151 57947349", href: "tel:+4915157947349", tone: "service" }
];

const civilianEmergencyContacts = [
  { icon: "110", name: "Polizei", note: "Ziviler Notruf", number: "110", href: "tel:110", tone: "emergency" },
  { icon: "112", name: "Feuerwehr und Rettungsdienst", note: "Ziviler Notruf", number: "112", href: "tel:112", tone: "emergency" }
];

const contacts = [
  { icon: "⌂", name: "Geschäftszimmer (GeZi)", note: "Organisation, Meldungen und allgemeine Anliegen" },
  { icon: "✚", name: "Sanitätsbereich (San)", note: "Krankmeldung und medizinische Anliegen" },
  { icon: "FJ", name: "Feldjäger-Notruf", note: "Militärpolizeiliche Hilfe und besondere Lagen" },
  { icon: "U", name: "UvD / GvD", note: "Ansprechstelle außerhalb der regulären Dienstzeit" },
  { icon: "W", name: "Kasernenwache", note: "Zutritt, Sicherheit und Meldungen an der Wache" },
  {
    icon: "S",
    name: "Sozialdienst der Bundeswehr",
    note: "Beratung und Betreuung bei sozialen sowie persönlichen Anliegen",
    href: "https://www.bundeswehr.de/de/selbstverstaendnis/betreuung-fuersorge/sozialdienst-bundeswehr"
  },
  {
    icon: "K",
    name: "Katholische Militärseelsorge Augustdorf",
    note: "Offizielle Kontaktseite des Militärpfarramts",
    href: "https://www.bundeswehr.de/de/organisation/militaerseelsorge/katholische-militaerseelsorge/struktur/militaerpfarraemter/augustdorf"
  },
  {
    icon: "E",
    name: "Evangelische Militärseelsorge Augustdorf",
    note: "Offizielle Kontaktseite des Militärpfarramts",
    href: "https://www.bundeswehr.de/de/organisation/militaerseelsorge/evangelische-militaerseelsorge/dienststellen/militaerpfarraemter/evangelisches-militaerpfarramt-augustdorf-i"
  }
];

const quizQuestionBank = [
  { id: "w100", category: "Waffen", short: "Waffen", label: "P8", value: 100, question: "Welche der vier Waffen ist eine Selbstladepistole?", options: ["G36", "P8", "MG5"], answer: 1 },
  { id: "w200", category: "Waffen", short: "Waffen", label: "G36", value: 200, question: "Wie viele Patronen fasst das Standardmagazin des G36?", options: ["15", "20", "30"], answer: 2 },
  { id: "w300", category: "Waffen", short: "Waffen", label: "MG5", value: 300, question: "Welche Waffe ist gurtgespeist und nutzt 7,62 × 51 mm NATO?", options: ["MG5", "P8", "Panzerfaust 3"], answer: 0 },
  { id: "w400", category: "Waffen", short: "Waffen", label: "G36", value: 400, question: "Welche Feuerarten sind beim G36 angegeben?", options: ["Nur Einzelfeuer", "Einzel- und Dauerfeuer", "Drei-Schuss-Feuer und Dauerfeuer"], answer: 1 },
  { id: "w500", category: "Waffen", short: "Waffen", label: "PzF 3", value: 500, question: "Aus welchen Hauptkomponenten besteht die Panzerfaust 3 laut Übersicht?", options: ["Vorgefülltes Rohr und wiederverwendbare Abfeuereinrichtung", "Magazin und Wechselrohr", "Munitionsgurt und Zweibein"], answer: 0 },

  { id: "ws100", category: "Sicherheitsbestimmungen", short: "Sicherheits\u00adbestimmungen", label: "Regel 1", value: 100, question: "Welche Aussage gibt die erste grundlegende Sicherheitsregel richtig wieder?", options: ["Jede Waffe ist immer als geladen zu betrachten.", "Eine gesicherte Waffe gilt grundsätzlich als ungeladen.", "Nur fremde Waffen sind als geladen zu betrachten."], answer: 0 },
  { id: "ws200", category: "Sicherheitsbestimmungen", short: "Sicherheits\u00adbestimmungen", label: "Regel 2", value: 200, question: "Welche Aussage gibt die zweite grundlegende Sicherheitsregel richtig wieder?", options: ["Eine Waffe darf auf jedes eindeutig erkennbare Objekt gerichtet werden.", "Eine Waffe ist nie auf etwas zu richten, das man nicht treffen will.", "Die Mündung darf beim Tragen in jede freie Richtung zeigen."], answer: 1 },
  { id: "ws300", category: "Sicherheitsbestimmungen", short: "Sicherheits\u00adbestimmungen", label: "Regel 3", value: 300, question: "Wann berührt der Abzugsfinger nach der dritten Sicherheitsregel den Abzug?", options: ["Sobald die Waffe aufgenommen wird.", "Erst wenn die Visiereinrichtung auf das Ziel gerichtet ist.", "Sobald sich keine Person direkt vor der Waffe befindet."], answer: 1 },
  { id: "ws400", category: "Sicherheitsbestimmungen", short: "Sicherheits\u00adbestimmungen", label: "Regel 4", value: 400, question: "Was verlangt die vierte grundlegende Sicherheitsregel?", options: ["Man muss sich seines Zieles sicher sein.", "Man muss die Waffe jederzeit mit beiden Händen halten.", "Man muss vor jedem Schuss die Entfernung laut ansagen."], answer: 0 },

  { id: "bw100", category: "Bundeswehr-Struktur", short: "Struktur", label: "Größen", value: 100, question: "Welche militärische Gliederung besteht typischerweise aus mehreren Gruppen?", options: ["Trupp", "Zug", "Brigade"], answer: 1 },
  { id: "bw200", category: "Bundeswehr-Struktur", short: "Struktur", label: "TSK", value: 200, question: "Welcher Bereich ist seit 2024 die vierte Teilstreitkraft?", options: ["CIR", "AIN", "IUD"], answer: 0 },
  { id: "bw300", category: "Bundeswehr-Struktur", short: "Struktur", label: "Verbände", value: 300, question: "Welche Gliederung besteht typischerweise aus mehreren Bataillonen?", options: ["Kompanie", "Brigade", "Gruppe"], answer: 1 },
  { id: "bw400", category: "Bundeswehr-Struktur", short: "Struktur", label: "Einheit", value: 400, question: "Wie heißt die Ebene von Kompanie beziehungsweise Batterie bei fliegenden Verbänden häufig?", options: ["Staffel", "Korps", "Regiment"], answer: 0 },
  { id: "bw500", category: "Bundeswehr-Struktur", short: "Struktur", label: "Korps", value: 500, question: "Welche Aussage beschreibt ein Korps richtig?", options: ["Es besteht aus zwei bis drei Personen.", "Es führt mehrere Divisionen und koordiniert sehr große Operationen.", "Es ist die Bezeichnung für eine Artilleriekompanie."], answer: 1 },

  { id: "t100", category: "Truppengattungen", short: "Gattungen", label: "Bild 1", value: 100, question: "Zu welcher Truppengattung gehört dieses Barettabzeichen?", options: ["Artillerietruppe", "Panzertruppe", "Pioniertruppe"], answer: 0, image: commonsFile("Barettabzeichen_Artillerietruppe_Bw.jpg"), imageAlt: "Barettabzeichen zur Bestimmung", imageSource: commonsPage("Barettabzeichen_Artillerietruppe_Bw.jpg") },
  { id: "t200", category: "Truppengattungen", short: "Gattungen", label: "Bild 2", value: 200, question: "Zu welcher Truppengattung gehört dieses Barettabzeichen?", options: ["Fernmeldetruppe", "Pioniertruppe", "Feldjägertruppe"], answer: 1, image: commonsFile("Barettabzeichen_Pioniertruppe_Bw.jpg"), imageAlt: "Barettabzeichen zur Bestimmung", imageSource: commonsPage("Barettabzeichen_Pioniertruppe_Bw.jpg") },
  { id: "t300", category: "Truppengattungen", short: "Gattungen", label: "Litzen", value: 300, question: "Welche Litzenfarbe trägt die Artillerietruppe?", options: ["Hochrot", "Rosa", "Mittelblau"], answer: 0 },
  { id: "t400", category: "Truppengattungen", short: "Gattungen", label: "Barett", value: 400, question: "Welche Barettfarbe ist bei der Panzertruppe angegeben?", options: ["Korallenrot", "Schwarz", "Bordeauxrot"], answer: 1 },
  { id: "t500", category: "Truppengattungen", short: "Gattungen", label: "Einordnung", value: 500, question: "Welcher Bereich ist keine Truppengattung des Heeres, sondern eine eigene Teilstreitkraft?", options: ["Artillerietruppe", "Pioniertruppe", "Cyber- und Informationsraum (CIR)"], answer: 2 },

  { id: "ba100", category: "Abkürzungen", short: "Abk.", value: 100, question: "Wofür steht BA in der Ausbildung?", options: ["Basisausbildung", "Bereitschaftsausbildung", "Bataillonsausbildung"], answer: 0 },
  { id: "ba200", category: "Abkürzungen", short: "Abk.", value: 200, question: "Welche frühere Bezeichnung wird mit AGA abgekürzt?", options: ["Allgemeine Grundausbildung", "Allgemeine Gefechtsausbildung", "Ausbildung für Grundaufgaben"], answer: 0 },
  { id: "ba300", category: "Abkürzungen", short: "Abk.", value: 300, question: "Wofür steht BFT?", options: ["Bundeswehr-Feldtest", "Basis-Fitness-Test", "Beurteilungs- und Fitnesstraining"], answer: 1 },
  { id: "ba400", category: "Abkürzungen", short: "Abk.", value: 400, question: "Was bedeutet IGF?", options: ["Individuelle Grundfertigkeiten", "Innere Gefechtsführung", "Integrierte Gruppenausbildung"], answer: 0 },
  { id: "ba500", category: "Abkürzungen", short: "Abk.", value: 500, question: "Welche Bezeichnung wird mit EPa abgekürzt?", options: ["Einsatzpaket", "Einpersonenpackung", "Erste persönliche Ausstattung"], answer: 1 },

  { id: "a100", category: "NATO-Alphabet", short: "NATO", value: 100, question: "Welches Buchstabierwort gehört zum Buchstaben B?", options: ["Bravo", "Baker", "Beta"], answer: 0 },
  { id: "a200", category: "NATO-Alphabet", short: "NATO", value: 200, question: "Welche Schreibweise ist im NATO-Alphabet richtig?", options: ["Juliet", "Juliett", "Julliet"], answer: 1 },
  { id: "a300", category: "NATO-Alphabet", short: "NATO", value: 300, question: "Wie wird der Buchstabe X buchstabiert?", options: ["Xeno", "X-ray", "Xylophone"], answer: 1 },
  { id: "a400", category: "NATO-Alphabet", short: "NATO", value: 400, question: "Welches Buchstabierwort gehört zum Buchstaben A?", options: ["Alpha", "Alfa", "Able"], answer: 1 },
  { id: "a500", category: "NATO-Alphabet", short: "NATO", value: 500, question: "Wie wird das Wort „ZUG“ im NATO-Alphabet buchstabiert?", options: ["Zulu – Uniform – Golf", "Zulu – Union – Gamma", "Zebra – Uniform – Golf"], answer: 0 },

  { id: "r100", category: "Dienstgrade", short: "Dienstgrade", label: "Bild 1", value: 100, question: "Welcher Dienstgrad ist auf dem Bild dargestellt?", options: ["Hauptgefreiter", "Stabsgefreiter", "Feldwebel"], answer: 0, image: commonsFile("Dienstgrad_Bundeswehr_Heer_031_Hauptgefreiter.svg"), imageAlt: "Dienstgradabzeichen des Heeres zur Bestimmung", imageSource: commonsPage("Dienstgrad_Bundeswehr_Heer_031_Hauptgefreiter.svg") },
  { id: "r200", category: "Dienstgrade", short: "Dienstgrade", label: "Bild 2", value: 200, question: "Welcher Dienstgrad ist auf dem Bild dargestellt?", options: ["Oberfeldwebel", "Hauptfeldwebel", "Oberstabsfeldwebel"], answer: 1, image: commonsFile("Dienstgrad_Bundeswehr_Heer_151_Hauptfeldwebel.svg"), imageAlt: "Dienstgradabzeichen des Heeres zur Bestimmung", imageSource: commonsPage("Dienstgrad_Bundeswehr_Heer_151_Hauptfeldwebel.svg") },
  { id: "r300", category: "Dienstgrade", short: "Dienstgrade", label: "Bild 3", value: 300, question: "Welcher Dienstgrad ist auf dem Bild dargestellt?", options: ["Leutnant", "Hauptmann", "Major"], answer: 1, image: commonsFile("Dienstgrad_Bundeswehr_Heer_231_Hauptmann.svg"), imageAlt: "Dienstgradabzeichen des Heeres zur Bestimmung", imageSource: commonsPage("Dienstgrad_Bundeswehr_Heer_231_Hauptmann.svg") },
  { id: "r400", category: "Dienstgrade", short: "Dienstgrade", label: "Bild 4", value: 400, question: "Welcher Dienstgrad ist auf dem Bild dargestellt?", options: ["Hauptmann", "Major", "Oberst"], answer: 1, image: commonsFile("Dienstgrad_Bundeswehr_Heer_251_Major.svg"), imageAlt: "Dienstgradabzeichen des Heeres zur Bestimmung", imageSource: commonsPage("Dienstgrad_Bundeswehr_Heer_251_Major.svg") },
  { id: "r500", category: "Dienstgrade", short: "Dienstgrade", label: "Bild 5", value: 500, question: "Welcher Dienstgrad ist auf dem Bild dargestellt?", options: ["Brigadegeneral", "Generalmajor", "Generalleutnant"], answer: 0, image: commonsFile("Dienstgrad_Bundeswehr_Heer_311_Brigadegeneral.svg"), imageAlt: "Dienstgradabzeichen des Heeres zur Bestimmung", imageSource: commonsPage("Dienstgrad_Bundeswehr_Heer_311_Brigadegeneral.svg") },

  { id: "pflichten-definition", category: "Pflichten & Befehle", short: "Pflichten & Befehle", label: "Definition", value: 100,
    question: "Mit welchem Anspruch wird ein Befehl nach der Definition erteilt?",
    options: ["Mit dem Anspruch auf Zustimmung", "Mit dem Anspruch auf Gehorsam", "Mit dem Anspruch auf einen Vorschlag"], answer: 1,
    explanation: "Die vorgegebene Befehlsdefinition nennt ausdrücklich den Anspruch auf Gehorsam." },
  { id: "pflichten-1", category: "Pflichten & Befehle", short: "Pflichten & Befehle", label: "§ 1", value: 200,
    question: "Wann darf eine Zugführerin ihrem unterstellten Zug nach § 1 Befehle erteilen?",
    options: ["Grundsätzlich im Dienst und außerhalb des Dienstes", "Nur während einer Ausbildung", "Nur innerhalb der Kaserne"], answer: 0,
    explanation: "Die Befugnis folgt aus der Führung der unterstellten Teileinheit und gilt im Dienst sowie außerhalb des Dienstes. In einen von Fachvorgesetzten geleiteten und beaufsichtigten Fachdienst soll sie nicht eingreifen." },
  { id: "pflichten-3", category: "Pflichten & Befehle", short: "Pflichten & Befehle", label: "§ 3", value: 300,
    question: "Darf ein eingesetzter Wachposten einen dienstfreien Soldaten zur Zutrittskontrolle anhalten?",
    options: ["Nein, Dienstfreie sind von § 3 immer ausgenommen", "Ja, wenn dies zur Erfüllung seines zugewiesenen Wachauftrags notwendig ist", "Ja, aber nur bei höherem Dienstgrad"], answer: 1,
    explanation: "§ 3 begrenzt die Befehle auf den besonderen Aufgabenbereich. Soweit dieser es erfordert, können sie auch an dienstfreie Soldatinnen und Soldaten gerichtet werden." },
  { id: "pflichten-4", category: "Pflichten & Befehle", short: "Pflichten & Befehle", label: "§ 4", value: 400,
    question: "Wer darf innerhalb umschlossener militärischer Anlagen nach § 4 Absatz 3 Hauptleuten und Leutnanten Befehle erteilen?",
    options: ["Stabsoffiziere", "Alle Mannschaftsdienstgrade", "Nur zivile Beschäftigte"], answer: 0,
    explanation: "Innerhalb umschlossener militärischer Anlagen sind Stabsoffiziere gegenüber Angehörigen der Dienstgradgruppen Hauptleute und Leutnante im Dienst und außerhalb des Dienstes befehlsbefugt." },
  { id: "pflichten-6", category: "Pflichten & Befehle", short: "Pflichten & Befehle", label: "§ 6", value: 500,
    question: "Ein Feldwebel trifft während einer Zugfahrt auf randalierende Mannschaftssoldaten. Wann darf er sich nach § 6 ihnen gegenüber zum Vorgesetzten erklären?",
    options: ["Sobald ihn das Verhalten persönlich stört", "Wenn ein sofortiges Eingreifen zur Wiederherstellung der Disziplin unerlässlich ist und die Betroffenen nicht schon nach §§ 1–3 oder 5 über ihn befehlsbefugt sind", "Nur wenn alle derselben Einheit angehören und gerade Dienst haben"], answer: 1,
    explanation: "§ 6 erlaubt die eigene Erklärung auch außerhalb des Dienstes, wenn ein sofortiges Eingreifen zur Aufrechterhaltung der Disziplin unerlässlich ist. Der Feldwebel darf den betroffenen Mannschaftssoldaten die zur Beendigung der Randale erforderlichen Befehle erteilen." },

  { id: "m100", category: "Meldungen", short: "Meldungen", value: 100, question: "Wofür steht die Abkürzung DTG?", options: ["Date-Time Group", "Daily Training Guide", "Duty Transmission Grid"], answer: 0 },
  { id: "m200", category: "Meldungen", short: "Meldungen", value: 200, question: "Welcher Zeitzonenbuchstabe steht für UTC beziehungsweise Zulu-Zeit?", options: ["A", "B", "Z"], answer: 2 },
  { id: "m300", category: "Meldungen", short: "Meldungen", value: 300, question: "Wie lautet die englische Monatsabkürzung für August in einer DTG?", options: ["AUG", "AGS", "AUT"], answer: 0 },
  { id: "m400", category: "Meldungen", short: "Meldungen", value: 400, question: "Welche Bedeutung hat die DTG 201430ZSEP26?", options: ["20. September 2026, 14:30 Uhr Zulu-Zeit", "14. September 2020, 20:30 Uhr Bravo-Zeit", "26. September 2020, 14:30 Uhr Alfa-Zeit"], answer: 0 },
  { id: "m500", category: "Meldungen", short: "Meldungen", value: 500, question: "Welche Zeitzone entspricht in Deutschland der Mitteleuropäischen Sommerzeit?", options: ["ALFA mit UTC+1", "BRAVO mit UTC+2", "ZULU mit UTC±0"], answer: 1 },

  { id: "o100", category: "Orientieren im Gelände", short: "Orient.", value: 100, question: "Welche Zuordnung für 1 cm Kartenstrecke ist richtig?", options: ["1 : 25.000 = 250 m; 1 : 50.000 = 500 m", "1 : 25.000 = 500 m; 1 : 50.000 = 250 m", "Bei beiden Maßstäben entspricht 1 cm genau 1 km"], answer: 0 },
  { id: "o200", category: "Orientieren im Gelände", short: "Orient.", value: 200, question: "Was bedeutet der Merksatz „Ran an den Baum, rauf auf den Baum“?", options: ["Erst Ostwert, dann Nordwert", "Erst Nordwert, dann Ostwert", "Erst Entfernung, dann Höhe"], answer: 0 },
  { id: "o300", category: "Orientieren im Gelände", short: "Orient.", value: 300, question: "Wie wird eine Kompassrichtung im Gelände zuverlässig verfolgt?", options: ["Kompass dauerhaft schräg halten", "Einen Richtungspunkt anpeilen, dorthin gehen und neu prüfen", "Nur der Sonne folgen"], answer: 1 },
  { id: "o400", category: "Orientieren im Gelände", short: "Orient.", value: 400, question: "Wie viele Strich umfasst der Vollkreis beim beschriebenen militärischen Kompass?", options: ["360 Strich", "3.200 Strich", "6.400 Strich"], answer: 2 },
  { id: "o500", category: "Orientieren im Gelände", short: "Orient.", value: 500, question: "Welche Arbeitsfolge beschreibt das Einnorden der Karte richtig?", options: ["Kompasskante an eine Nord-Süd-Gitterlinie legen, Karte und Kompass gemeinsam nach Norden drehen und die Nadelabweichung berücksichtigen", "Karte senkrecht halten und nur nach dem Sonnenstand drehen", "Kompass neben die Karte legen und ausschließlich den Kartenrand nach Osten ausrichten"], answer: 0 }
];

quizQuestionBank.push(
  { id: "w-caliber-g36", category: "Waffen", short: "Waffen", question: "Welches Kaliber nutzt das G36?", options: ["5,56 × 45 mm NATO", "7,62 × 51 mm NATO", "9 × 19 mm"], answer: 0 },
  { id: "w-mag-p8", category: "Waffen", short: "Waffen", question: "Wie viele Patronen fasst das in der Übersicht angegebene Magazin der P8?", options: ["8", "15", "30"], answer: 1 },
  { id: "w-feed-mg5", category: "Waffen", short: "Waffen", question: "Wie wird dem MG5 die Munition zugeführt?", options: ["Über einen Munitionsgurt", "Über ein 15-Schuss-Pistolenmagazin", "Über ein vorgefülltes Rohr"], answer: 0 },
  { id: "w-g36-safe-report", category: "Waffen", short: "Waffen", question: "Welche Meldung folgt beim G36 nach der Sicherheitsüberprüfung?", options: ["G36 entladen, Patronenlager frei, entspannt und gesichert.", "G36 teilgeladen.", "G36 fertiggeladen."], answer: 0 },
  { id: "w-g36-partloaded", category: "Waffen", short: "Waffen", question: "Welcher Ladezustand wird gemeldet, wenn sich das Magazin in der Waffe befindet?", options: ["G36 teilgeladen.", "G36 fertiggeladen.", "G36 entspannt."], answer: 0 },

  { id: "bw-order", category: "Bundeswehr-Struktur", short: "Struktur", question: "Welche Reihenfolge geht von klein nach groß?", options: ["Trupp – Gruppe – Zug", "Zug – Trupp – Gruppe", "Gruppe – Brigade – Trupp"], answer: 0 },
  { id: "bw-battery", category: "Bundeswehr-Struktur", short: "Struktur", question: "Wie heißt die Einheitsebene einer Kompanie bei der Artillerie?", options: ["Batterie", "Rotte", "Korps"], answer: 0 },
  { id: "bw-battalion", category: "Bundeswehr-Struktur", short: "Struktur", question: "Welche Ebene umfasst typischerweise mehrere Kompanien oder Batterien?", options: ["Bataillon", "Gruppe", "Trupp"], answer: 0 },
  { id: "bw-division", category: "Bundeswehr-Struktur", short: "Struktur", question: "Welche Ebene kann mehrere Brigaden führen?", options: ["Division", "Zug", "Staffel"], answer: 0 },
  { id: "bw-army", category: "Bundeswehr-Struktur", short: "Struktur", question: "Welche Teilstreitkraft führt Operationen vor allem in der Dimension Land?", options: ["Heer", "Marine", "Luftwaffe"], answer: 0 },

  { id: "t-fernmelde-image", category: "Truppengattungen", short: "Gattungen", question: "Zu welcher Truppengattung gehört dieses Barettabzeichen?", options: ["Fernmeldetruppe", "Pioniertruppe", "Artillerietruppe"], answer: 0, image: commonsFile("Barettabzeichen_Fernmeldetruppe_Bw.jpg"), imageAlt: "Barettabzeichen zur Bestimmung", imageSource: commonsPage("Barettabzeichen_Fernmeldetruppe_Bw.jpg") },
  { id: "t-panzer-image", category: "Truppengattungen", short: "Gattungen", question: "Zu welcher Truppengattung gehört dieses Barettabzeichen?", options: ["Panzertruppe", "Jägertruppe", "Sanitätsdienst Heer"], answer: 0, image: commonsFile("Barettabzeichen_Panzertruppe_Bw.jpg"), imageAlt: "Barettabzeichen zur Bestimmung", imageSource: commonsPage("Barettabzeichen_Panzertruppe_Bw.jpg") },
  { id: "t-fernmelde-litzen", category: "Truppengattungen", short: "Gattungen", question: "Welche Litzenfarbe ist bei der Fernmeldetruppe angegeben?", options: ["Zitronengelb", "Hochrot", "Schwarz"], answer: 0 },
  { id: "t-fallschirm-beret", category: "Truppengattungen", short: "Gattungen", question: "Welche Barettfarbe trägt die Fallschirmjägertruppe?", options: ["Bordeauxrot", "Schwarz", "Marineblau"], answer: 0 },
  { id: "t-pionier-litzen", category: "Truppengattungen", short: "Gattungen", question: "Welche Litzenfarbe ist bei der Pioniertruppe angegeben?", options: ["Schwarz", "Rosa", "Mittelblau"], answer: 0 },

  { id: "ba-hiba", category: "Abkürzungen", short: "Abk.", question: "Wofür steht HiBa?", options: ["Hindernisbahn", "Hilfsbataillon", "Hintere Basis"], answer: 0 },
  { id: "ba-btl", category: "Abkürzungen", short: "Abk.", question: "Wofür steht Btl?", options: ["Bataillon", "Batterieleitung", "Bereitschaftslage"], answer: 0 },
  { id: "ba-ovwa", category: "Abkürzungen", short: "Abk.", question: "Wofür steht OvWa?", options: ["Offizier vom Wachdienst", "Ort vom Waffendienst", "Offizier vom Wehramt"], answer: 0 },
  { id: "ba-waka", category: "Abkürzungen", short: "Abk.", question: "Wofür steht WaKa?", options: ["Waffenkammer", "Wachkarte", "Wartungskarte"], answer: 0 },
  { id: "ba-td", category: "Abkürzungen", short: "Abk.", question: "Wofür steht TD?", options: ["Technischer Dienst", "Täglicher Dienst", "Taktische Darstellung"], answer: 0 },
  { id: "ba-dze", category: "Abkürzungen", short: "Abk.", question: "Wofür steht DZE?", options: ["Dienstzeitende", "Dienstzentrale Einheit", "Dauerzug-Einsatz"], answer: 0 },
  { id: "ba-saz", category: "Abkürzungen", short: "Abk.", question: "Wofür steht SaZ?", options: ["Soldat auf Zeit", "Sanitäter auf Zug", "Soldat als Zivilist"], answer: 0 },
  { id: "ba-bs", category: "Abkürzungen", short: "Abk.", question: "Wofür steht BS?", options: ["Berufssoldat", "Bereitschaftsstufe", "Bataillonsstab"], answer: 0 },
  { id: "ba-fwdl", category: "Abkürzungen", short: "Abk.", question: "Wofür steht FWDL?", options: ["Freiwillig-Wehrdienst-Leistender", "Feldwebel-Dienstleitung", "Freiwillige Wach- und Dienstleistung"], answer: 0 },

  { id: "a-charlie", category: "NATO-Alphabet", short: "NATO", question: "Welches Buchstabierwort gehört zum Buchstaben C?", options: ["Charlie", "Caesar", "Cobra"], answer: 0 },
  { id: "a-echo", category: "NATO-Alphabet", short: "NATO", question: "Welches Buchstabierwort gehört zum Buchstaben E?", options: ["Echo", "Eagle", "Europa"], answer: 0 },
  { id: "a-kilo", category: "NATO-Alphabet", short: "NATO", question: "Wie wird der Buchstabe K im NATO-Alphabet buchstabiert?", options: ["Kilo", "Kaiser", "Komet"], answer: 0 },
  { id: "a-whiskey", category: "NATO-Alphabet", short: "NATO", question: "Welches Buchstabierwort gehört zum Buchstaben W?", options: ["Whiskey", "Walter", "Weser"], answer: 0 },
  { id: "a-meldung", category: "NATO-Alphabet", short: "NATO", question: "Wie wird das Wort „MELDUNG“ im NATO-Alphabet begonnen?", options: ["Mike – Echo – Lima", "Metro – Eagle – London", "Mike – Europa – Lima"], answer: 0 },

  { id: "r-obergefreiter", category: "Dienstgrade", short: "Dienstgrade", question: "Welcher Dienstgrad ist auf dem Bild dargestellt?", options: ["Obergefreiter", "Gefreiter", "Hauptgefreiter"], answer: 0, image: commonsFile("Dienstgrad_Bundeswehr_Heer_021_Obergefreiter.svg"), imageAlt: "Dienstgradabzeichen des Heeres zur Bestimmung", imageSource: commonsPage("Dienstgrad_Bundeswehr_Heer_021_Obergefreiter.svg") },
  { id: "r-stabsunteroffizier", category: "Dienstgrade", short: "Dienstgrade", question: "Welcher Dienstgrad ist auf dem Bild dargestellt?", options: ["Stabsunteroffizier", "Unteroffizier", "Feldwebel"], answer: 0, image: commonsFile("Dienstgrad_Bundeswehr_Heer_121_Stabsunteroffizier.svg"), imageAlt: "Dienstgradabzeichen des Heeres zur Bestimmung", imageSource: commonsPage("Dienstgrad_Bundeswehr_Heer_121_Stabsunteroffizier.svg") },
  { id: "r-faehnrich", category: "Dienstgrade", short: "Dienstgrade", question: "Welcher Anwärterdienstgrad ist auf dem Bild dargestellt?", options: ["Fähnrich", "Fahnenjunker", "Oberfähnrich"], answer: 0, image: commonsFile("Dienstgrad_Bundeswehr_Heer_134_Faehnrich.svg"), imageAlt: "Dienstgradabzeichen des Heeres zur Bestimmung", imageSource: commonsPage("Dienstgrad_Bundeswehr_Heer_134_Faehnrich.svg") },
  { id: "r-oberstleutnant", category: "Dienstgrade", short: "Dienstgrade", question: "Welcher Dienstgrad ist auf dem Bild dargestellt?", options: ["Oberstleutnant", "Major", "Oberst"], answer: 0, image: commonsFile("Dienstgrad_Bundeswehr_Heer_261_Oberstleutnant.svg"), imageAlt: "Dienstgradabzeichen des Heeres zur Bestimmung", imageSource: commonsPage("Dienstgrad_Bundeswehr_Heer_261_Oberstleutnant.svg") },
  { id: "r-generalmajor", category: "Dienstgrade", short: "Dienstgrade", question: "Welcher Dienstgrad ist auf dem Bild dargestellt?", options: ["Generalmajor", "Brigadegeneral", "Generalleutnant"], answer: 0, image: commonsFile("Dienstgrad_Bundeswehr_Heer_321_Generalmajor.svg"), imageAlt: "Dienstgradabzeichen des Heeres zur Bestimmung", imageSource: commonsPage("Dienstgrad_Bundeswehr_Heer_321_Generalmajor.svg") },

  { id: "pflichten-form", category: "Pflichten & Befehle", short: "Pflichten & Befehle", question: "In welcher Form kann ein Befehl nach der Definition erteilt werden?", options: ["Schriftlich, mündlich oder in anderer Weise", "Nur schriftlich", "Nur mündlich vor Zeugen"], answer: 0, explanation: "Die vorgegebene Definition nennt schriftliche, mündliche und andere Formen." },
  { id: "pflichten-2", category: "Pflichten & Befehle", short: "Pflichten & Befehle", question: "Worauf ist die Befehlsbefugnis eines Fachvorgesetzten nach § 2 begrenzt?", options: ["Auf seinen Fachbereich", "Auf alle privaten Angelegenheiten", "Nur auf sportliche Ausbildung"], answer: 0, explanation: "Fachvorgesetzte erteilen Befehle innerhalb des ihnen übertragenen Fachdienstes." },
  { id: "pflichten-5", category: "Pflichten & Befehle", short: "Pflichten & Befehle", question: "Wodurch entsteht das Vorgesetztenverhältnis nach § 5?", options: ["Durch eine besondere Anordnung", "Allein durch höheres Lebensalter", "Durch längere Zugehörigkeit zur Bundeswehr"], answer: 0, explanation: "§ 5 regelt das Vorgesetztenverhältnis aufgrund besonderer Anordnung." },
  { id: "pflichten-12", category: "Pflichten & Befehle", short: "Pflichten & Befehle", question: "Was verlangt § 12 Soldatengesetz von Soldatinnen und Soldaten?", options: ["Kameradschaft", "Die Wahl einer bestimmten Laufbahn", "Die private Unterbringung in der Kaserne"], answer: 0, explanation: "§ 12 Soldatengesetz regelt die Pflicht zur Kameradschaft." },
  { id: "pflichten-example", category: "Pflichten & Befehle", short: "Pflichten & Befehle", question: "Welche Handlung entspricht der Pflicht zur Kameradschaft?", options: ["Eine Kameradin in einer schwierigen Lage unterstützen", "Fehler anderer absichtlich verschweigen, obwohl Gefahr besteht", "Kameraden wegen Herkunft abwerten"], answer: 0, explanation: "Kameradschaft umfasst gegenseitige Achtung, Hilfe und das Eintreten füreinander." },

  { id: "m-dtg-punctuation", category: "Meldungen", short: "Meldungen", question: "Wie wird eine Date-Time Group geschrieben?", options: ["Ohne Punkte", "Mit Punkten zwischen allen Bestandteilen", "Nur mit Schrägstrichen"], answer: 0 },
  { id: "m-slip-number", category: "Meldungen", short: "Meldungen", question: "Was wird im Feld „Meldung Nr.“ eingetragen?", options: ["Die laufende Nummer der Meldung", "Die Personalnummer des Empfängers", "Der Kartenmaßstab"], answer: 0 },
  { id: "m-slip-recipient", category: "Meldungen", short: "Meldungen", question: "Was gehört auf der Vorderseite in das Feld „An“?", options: ["Der Empfänger der Meldung", "Der Abgangsort", "Die Unterschrift"], answer: 0 },
  { id: "m-slip-north", category: "Meldungen", short: "Meldungen", question: "Welches Richtungselement gehört auf jede Skizze der Rückseite?", options: ["Ein Nordpfeil", "Ein Windpfeil", "Ein Marschgeschwindigkeitspfeil"], answer: 0 },
  { id: "m-slip-scale", category: "Meldungen", short: "Meldungen", question: "Was geschieht mit den nicht verwendeten Maßstäben auf der Rückseite?", options: ["Sie werden durchgestrichen", "Sie bleiben unverändert stehen", "Sie werden ausgeschnitten"], answer: 0 },

  { id: "o-utm-name", category: "Orientieren im Gelände", short: "Orient.", question: "Wofür steht UTM?", options: ["Universal Transverse Mercator", "Unified Terrain Map", "Universal Tactical Marking"], answer: 0 },
  { id: "o-utmref", category: "Orientieren im Gelände", short: "Orient.", question: "Was beschreibt UTMREF am besten?", options: ["Eine kompakte Rasterangabe, die auf UTM aufbaut", "Eine Kompassart ohne Karte", "Eine Zeitzonenangabe"], answer: 0 },
  { id: "o-coordinate-order", category: "Orientieren im Gelände", short: "Orient.", question: "In welcher Reihenfolge werden Gitterkoordinaten gelesen?", options: ["Erst Ostwert, dann Nordwert", "Erst Nordwert, dann Ostwert", "Erst Höhe, dann Entfernung"], answer: 0 },
  { id: "o-gridline", category: "Orientieren im Gelände", short: "Orient.", question: "Welche Gitterlinie dient beim Einnorden als Anlagekante für den Kompass?", options: ["Eine Nord-Süd-Gitterlinie", "Eine beliebige Höhenlinie", "Nur der untere Kartenrand"], answer: 0 },
  { id: "o-direction-point", category: "Orientieren im Gelände", short: "Orient.", question: "Warum wird beim Marsch mit Kompass ein Richtungspunkt angepeilt?", options: ["Damit die Richtung bis zu einem gut erkennbaren Punkt gehalten und dort neu geprüft werden kann", "Damit der Kompass nicht mehr benötigt wird", "Damit die Karte nach Osten gedreht werden kann"], answer: 0 }
);

let quizQuestions = [];

function imageWithFallback(src, alt, credit = "") {
  return `<img src="${src}" alt="${alt}" loading="lazy" decoding="async" data-image><span class="image-fallback" data-fallback>Bild derzeit nicht verfügbar${credit ? `<br><small>${credit}</small>` : ""}</span>`;
}

function renderWeapons() {
  const list = document.querySelector("#weapon-list");
  list.innerHTML = weapons.map((weapon, index) => `
    <article class="weapon-card" id="${weapon.id}" style="--weapon-accent:${weapon.accent};--weapon-accent-soft:${weapon.accentSoft}">
      <div class="weapon-image-wrap">
        ${imageWithFallback(commonsFile(weapon.image), `${weapon.name}, freigestellte oder dokumentarische Darstellung`, weapon.imageCredit)}
        <span class="weapon-label">SYSTEM 0${index + 1}</span>
      </div>
      <div class="weapon-body">
        <div class="weapon-title-row"><h2>${weapon.name}</h2><span>${weapon.type}</span></div>
        <p class="weapon-summary">${weapon.summary}</p>
        <dl class="spec-grid">${weapon.specs.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl>
        ${weapon.loadStates ? `
          <section class="weapon-load-states" aria-labelledby="${weapon.id}-load-states-title">
            <div class="weapon-load-states-heading">
              <span class="kicker">Ausbildungsunterlage</span>
              <h3 id="${weapon.id}-load-states-title">Meldungen zum Ladezustand</h3>
            </div>
            <div class="weapon-load-state-grid">
              ${weapon.loadStates.map((state, stateIndex) => `
                <article class="weapon-load-state">
                  <span class="weapon-load-state-number">0${stateIndex + 1}</span>
                  <h4>${state.title}</h4>
                  <p>${state.context}</p>
                  <blockquote>„${state.report}“</blockquote>
                </article>`).join("")}
            </div>
            <p class="weapon-load-state-note"><strong>Wichtig:</strong> Die Meldung wird erst nach dem entsprechenden, ausgebildeten Handlungsablauf abgegeben. Sie ersetzt keine Sicherheitsüberprüfung.</p>
          </section>` : ""}
        <div class="weapon-links">
          <a class="text-button primary" href="${weapon.source}" target="_blank" rel="noreferrer">Bundeswehr-Quelle ↗</a>
          <a class="text-button" href="${weapon.video}" target="_blank" rel="noreferrer">Video ansehen ↗</a>
          <a class="text-button" href="${commonsPage(weapon.image)}" target="_blank" rel="noreferrer">Bildnachweis ↗</a>
        </div>
      </div>
    </article>`).join("");

}

function renderAlphabet() {
  document.querySelector("#alphabet-grid").innerHTML = natoAlphabet.map(([letter, word]) => `
    <div class="alphabet-card"><span class="letter">${letter}</span><strong>${word}</strong></div>`).join("");
}

function renderSupplementalRankGroups(targetId, groups) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;

  target.innerHTML = groups.map((group, groupIndex) => {
    const titleId = `${targetId}-title-${groupIndex + 1}`;
    return `
      <section class="supplemental-rank-group" aria-labelledby="${titleId}">
        <header class="supplemental-rank-heading">
          <span>${String(groupIndex + 1).padStart(2, "0")}</span>
          <div><h3 id="${titleId}">${group.title}</h3><small>${group.subtitle}</small></div>
        </header>
        <div class="supplemental-rank-grid">
          ${group.items.map(item => {
            const media = supplementalRankMedia[item.name];
            return `
              <article class="supplemental-rank-card">
                <div class="supplemental-rank-visual">
                  <span class="supplemental-rank-code" aria-hidden="true">${item.code}</span>
                  ${imageWithFallback(media?.src || "", `Dienstgradabzeichen: ${item.name}`)}
                </div>
                <div class="supplemental-rank-copy">
                  <span class="supplemental-rank-variant">${media?.variant || "Dienstgradabzeichen"}</span>
                  <strong>${item.name}</strong>
                  <small>${item.note}</small>
                </div>
              </article>`;
          }).join("")}
        </div>
      </section>`;
  }).join("");
}

function renderRanks() {
  const groups = ["Mannschaften", "Anwärterdienstgrade", "Unteroffiziere", "Offiziere", "Generale"];
  const candidateGuide = `
    <div class="candidate-guide">
      <p class="candidate-guide-intro"><strong>Anwärter ist nicht automatisch ein eigener Dienstgrad.</strong> UA, FA und OA bezeichnen zunächst die angestrebte Laufbahn. Der jeweils erreichte Dienstgrad bleibt bestehen und erhält eine zusätzliche Kennzeichnung. Nur in der Offizieranwärterlaufbahn gibt es beim Heer außerdem die benannten Dienstgrade Fahnenjunker, Fähnrich und Oberfähnrich.</p>
      <div class="candidate-type-grid">
        <article class="candidate-type candidate-ua">
          <figure class="candidate-example">
            ${imageWithFallback(commonsFile("Dienstgrad_Bundeswehr_Heer_012_Gefreiter_Unteroffizieranwaerter.svg"), "Dienstgradschlaufe Heer: Gefreiter Unteroffizieranwärter")}
            <a href="${commonsPage("Dienstgrad_Bundeswehr_Heer_012_Gefreiter_Unteroffizieranwaerter.svg")}" target="_blank" rel="noreferrer">Bildnachweis ↗</a>
          </figure>
          <div><strong>Unteroffizieranwärter (UA)</strong><p>Erkennbar an einer Dienstgradschlaufe mit zusätzlichem <b>quergestelltem Streifen</b>. Im Schriftverkehr steht der Zusatz „(UA)“ hinter dem aktuellen Dienstgrad.</p></div>
        </article>
        <article class="candidate-type candidate-fa">
          <figure class="candidate-example">
            ${imageWithFallback(commonsFile("Dienstgrad_Bundeswehr_Heer_023_Obergefreiter_Feldwebelanwaerter.svg"), "Dienstgradschlaufe Heer: Obergefreiter Feldwebelanwärter")}
            <a href="${commonsPage("Dienstgrad_Bundeswehr_Heer_023_Obergefreiter_Feldwebelanwaerter.svg")}" target="_blank" rel="noreferrer">Bildnachweis ↗</a>
          </figure>
          <div><strong>Feldwebelanwärter (FA)</strong><p>Erkennbar an einer <b>altgoldfarbenen Litze</b>, die über die Dienstgradschlaufe gezogen wird. Sie wird zusätzlich zur farbigen Litze der Truppengattung getragen.</p></div>
        </article>
        <article class="candidate-type candidate-oa">
          <figure class="candidate-example">
            ${imageWithFallback(commonsFile("Dienstgrad_Bundeswehr_Heer_134_Faehnrich.svg"), "Dienstgradschlaufe Heer: Fähnrich mit silberfarbener Litze")}
            <a href="${commonsPage("Dienstgrad_Bundeswehr_Heer_134_Faehnrich.svg")}" target="_blank" rel="noreferrer">Bildnachweis ↗</a>
          </figure>
          <div><strong>Offizieranwärter (OA)</strong><p>Erkennbar an einer <b>silberfarbenen Litze</b>, die über die Dienstgradschlaufe gezogen wird. Das Beispiel eines Fähnrichs zeigt diese Kennzeichnung.</p></div>
        </article>
      </div>
      <p class="candidate-litzen-note"><strong>Wichtig:</strong> Die farbige Waffenfarbenlitze zeigt die Truppengattung. Die silber- oder altgoldfarbene Anwärterlitze zeigt dagegen die Laufbahn.</p>
    </div>`;
  document.querySelector("#rank-groups").innerHTML = groups.map(group => `
    <section class="rank-section" data-rank-group="${group}">
      <h2 class="rank-group-title">${group}</h2>
      ${group === "Anwärterdienstgrade" ? candidateGuide : ""}
      <div class="rank-grid">
        ${ranks.filter(rank => rank.group === group).map(rank => `
          <article class="rank-card${group === "Anwärterdienstgrade" ? " rank-card-candidate" : ""}">
            <div class="rank-image">
              <span class="rank-code">${rank.code}</span>
              ${imageWithFallback(commonsFile(rank.file), `Dienstgradabzeichen Heer: ${rank.name}`)}
            </div>
            <div class="rank-copy"><strong>${rank.name}</strong><small>${rank.subgroup ? `${rank.subgroup} · ` : ""}${rank.note}</small></div>
          </article>`).join("")}
      </div>
    </section>`).join("");

  renderSupplementalRankGroups("medical-rank-groups", medicalRankGroups);
  renderSupplementalRankGroups("navy-rank-groups", navyRankGroups);
}

function renderBranches() {
  document.querySelector("#branch-grid").innerHTML = branches.map(branch => `
    <article class="branch-card${branch.local ? " branch-card-local" : ""}" style="--branch-color:${branch.color};--beret-color:${branch.beretColor}">
      <div class="branch-visual">
        ${branch.status ? `<span class="branch-status">${branch.status}</span>` : ""}
        ${imageWithFallback(branch.local ? branch.image : commonsFile(branch.file), `Barettabzeichen: ${branch.name}`)}
      </div>
      <div class="branch-copy">
        <strong>${branch.name}</strong>
        <ul class="branch-facts">
          <li><b>Barettabzeichen</b><span>${branch.badge}</span></li>
          <li><b>Litzenfarbe</b><span class="branch-fact-color"><i class="branch-swatch branch-swatch-litzen" aria-hidden="true"></i>${branch.litzen}</span></li>
          <li><b>Barettfarbe</b><span class="branch-fact-color"><i class="branch-swatch branch-swatch-beret" aria-hidden="true"></i>${branch.beret}</span></li>
        </ul>
        <p class="branch-task">${branch.note}</p>
        ${branch.local ? `<span class="branch-image-note">Bereitgestelltes Abzeichen</span>` : `<a href="${commonsPage(branch.file)}" target="_blank" rel="noreferrer">Bild & Lizenz ↗</a>`}
      </div>
    </article>`).join("");
}

function renderOrganizations() {
  document.querySelector("#organization-groups").innerHTML = organizationGroups.map(group => `
    <section class="organization-section">
      <h2>${group.title}</h2>
      <p>${group.note}</p>
      <div class="organization-grid">
        ${group.items.map(item => `
          <details class="organization-card" style="--org-color:${item.color}">
            <summary>
              <span class="organization-symbol" aria-hidden="true">${item.symbol}</span>
              <span class="organization-summary-copy">
                <strong>${item.name}</strong>
                <small>${item.note}</small>
              </span>
              <span class="organization-toggle" aria-hidden="true"></span>
            </summary>
            <div class="organization-detail">
              <span class="organization-detail-label">${item.detailTitle}</span>
              <ul>
                ${item.details.map(([name, note]) => `<li><strong>${name}</strong><small>${note}</small></li>`).join("")}
              </ul>
              <a href="${item.source}" target="_blank" rel="noreferrer">Offizielle Übersicht ↗</a>
            </div>
          </details>`).join("")}
      </div>
    </section>`).join("");
}

function renderKnots() {
  document.querySelector("#knot-grid").innerHTML = knots.map((knot, index) => `
    <a class="knot-card" href="#knoten/${knot.id}" data-knot-link="${knot.id}" style="--knot-color:${knot.type === "Bund" ? "#344e68" : knot.type === "Grundlage" ? "#62652b" : "#b20d22"}">
      <span class="knot-card-image">
        ${imageWithFallback(knot.localImage || commonsFile(knot.file), `Beispiel: ${knot.name}`)}
        <span class="knot-image-label">Beispiel</span>
      </span>
      <div class="knot-card-head">
        <span class="knot-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="knot-type">${knot.type}</span>
      </div>
      <h2>${knot.name}</h2>
      <p>${knot.note}</p>
      <span class="knot-card-action">Anleitung öffnen <span aria-hidden="true">→</span></span>
    </a>`).join("");
}

function renderKnotLesson(knot) {
  const lesson = document.querySelector("#knot-lesson");
  const number = String(knots.indexOf(knot) + 1).padStart(2, "0");
  lesson.innerHTML = `
    <a class="back-link knot-back-link" href="#knoten"><svg class="back-link-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 12H4m8-8-8 8 8 8"/></svg><span class="back-link-label">Alle Knoten &amp; Bunde</span></a>
    <header class="knot-lesson-header" style="--knot-color:${knot.type === "Bund" ? "#344e68" : knot.type === "Grundlage" ? "#62652b" : "#b20d22"}">
      <div class="knot-lesson-meta">
        <span class="knot-number">${number}</span>
        <span class="knot-type">${knot.type}</span>
      </div>
      <h2>${knot.name}</h2>
      <p>${knot.note}</p>
      <a class="knot-image-source" href="${commonsPage(knot.file)}" target="_blank" rel="noreferrer">Bild &amp; Lizenz: Wikimedia Commons ↗</a>
      ${knot.localImage ? '<p class="knot-image-credit">Foto: David J. Fred · <a href="https://creativecommons.org/licenses/by-sa/2.5/" target="_blank" rel="noreferrer">CC BY-SA 2.5</a> · verkleinert und als WebP gespeichert.</p>' : ""}
      ${knot.source ? `<a class="knot-image-source" href="${knot.source}" target="_blank" rel="noreferrer">Ausbildungsgrundlage: ${knot.sourceLabel} ↗</a>` : ""}
    </header>
    ${knot.video ? `
      <div class="knot-video-card">
        <div class="knot-video-copy">
          <span class="kicker">Beispielvideo</span>
          <h3>Bewegungsablauf ansehen</h3>
          <p>Das externe Video ergänzt die Einzelschritte. Es benötigt eine Internetverbindung; die Textanleitung bleibt offline verfügbar.</p>
        </div>
        <div class="knot-video">
          <iframe src="https://www.youtube-nocookie.com/embed/${knot.video}" title="Beispielvideo: ${knot.name}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>` : ""}
    <section class="knot-steps" aria-labelledby="knot-steps-title">
      <div class="knot-steps-heading">
        <span class="kicker">Schritt für Schritt</span>
        <h3 id="knot-steps-title">${knot.name} anfertigen</h3>
      </div>
      <ol class="knot-step-list">
        ${knot.steps.map(([title, copy], index) => `
          <li>
            <span class="knot-step-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
            <div><strong>${title}</strong><p>${copy}</p></div>
          </li>`).join("")}
      </ol>
      <p class="knot-tip"><strong>Merke:</strong> ${knot.tip}</p>
    </section>
    <aside class="knot-safety">
      <strong>Übungshinweis</strong>
      <p>Diese Anleitung ist eine Lernhilfe und ersetzt nicht die praktische Einweisung. Für Personensicherung, Klettern, Rettung oder andere sicherheitskritische Lasten gelten ausschließlich die dafür freigegebene Ausbildung, Ausrüstung und aktuelle Vorschriften.</p>
    </aside>`;
}

function renderContacts() {
  const renderNumberCards = (selector, items) => {
    document.querySelector(selector).innerHTML = items.map(({ icon, name, note, number, href, tone }) => `
      <article class="contact-card contact-card--${tone}">
        <span class="contact-icon" aria-hidden="true">${icon}</span>
        <span class="contact-copy"><strong>${name}</strong><small>${note}</small></span>
        <a class="contact-number" href="${href}" aria-label="${name} unter ${number} anrufen"><strong>${number}</strong><small>Anrufen</small></a>
      </article>`).join("");
  };

  renderNumberCards("#service-contact-list", serviceContacts);
  renderNumberCards("#civilian-emergency-list", civilianEmergencyContacts);
  document.querySelector("#contact-list").innerHTML = contacts.map(({ icon, name, note, href }) => `
    <article class="contact-card${href ? " contact-card--resource" : ""}">
      <span class="contact-icon" aria-hidden="true">${icon}</span>
      <span class="contact-copy"><strong>${name}</strong><small>${note}</small></span>
      ${href
        ? `<a class="contact-resource" href="${href}" target="_blank" rel="noreferrer" aria-label="Offizielle Kontaktseite für ${name} öffnen"><span>Kontakt öffnen</span><b aria-hidden="true">↗</b></a>`
        : `<span class="number-placeholder">folgt</span>`}
    </article>`).join("");
}

function installImageFallbacks(root = document) {
  root.querySelectorAll("[data-image]").forEach(image => {
    image.addEventListener("error", () => {
      image.style.display = "none";
      const fallback = image.nextElementSibling;
      if (fallback) fallback.style.display = "grid";
    }, { once: true });
  });
}

function installRankFilters() {
  document.querySelectorAll("[data-rank-filter]").forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.rankFilter;
      document.querySelectorAll("[data-rank-filter]").forEach(item => item.classList.toggle("active", item === button));
      document.querySelectorAll("[data-rank-group]").forEach(section => {
        section.hidden = filter !== "all" && section.dataset.rankGroup !== filter;
      });
    });
  });
}

const RANK_GAME_LENGTH = 20;
const RANK_GAME_FEEDBACK_DELAY = 2200;
let lastRankGameSignature = "";

function shuffledCopy(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[other]] = [copy[other], copy[index]];
  }
  return copy;
}

function createRankGameRound() {
  let selection = [];
  let signature = "";

  for (let attempt = 0; attempt < 12; attempt += 1) {
    selection = shuffledCopy(ranks).slice(0, Math.min(RANK_GAME_LENGTH, ranks.length));
    signature = selection.map(rank => rank.file).sort().join("|");
    if (signature !== lastRankGameSignature) break;
  }

  if (signature === lastRankGameSignature && ranks.length > selection.length) {
    const replacement = ranks.find(rank => !selection.some(selected => selected.file === rank.file));
    if (replacement) selection[selection.length - 1] = replacement;
    signature = selection.map(rank => rank.file).sort().join("|");
  }

  lastRankGameSignature = signature;
  const beginWithImage = Math.random() >= .5;
  return selection.map((rank, index) => ({
    rank,
    mode: (index % 2 === 0) === beginWithImage ? "image-to-name" : "name-to-image"
  }));
}

function createRankGameChoices(correctRank) {
  const sameGroup = shuffledCopy(ranks.filter(rank => rank.group === correctRank.group && rank.file !== correctRank.file));
  const otherGroups = shuffledCopy(ranks.filter(rank => rank.group !== correctRank.group && rank.file !== correctRank.file));
  const distractors = [...sameGroup, ...otherGroups].slice(0, 3);
  return shuffledCopy([correctRank, ...distractors]);
}

function installRankLearningGame() {
  const game = document.querySelector("#dienstgradspiel");
  const board = document.querySelector("#rank-game-board");
  const progress = document.querySelector("#rank-game-progress");
  const score = document.querySelector("#rank-game-score");
  const feedback = document.querySelector("#rank-game-feedback");
  const autoNote = document.querySelector("#rank-game-auto-note");
  const restart = document.querySelector("#rank-game-restart");
  if (!game || !board || !progress || !score || !feedback || !autoNote || !restart) return;

  let round = [];
  let questionIndex = 0;
  let correctAnswers = 0;
  let answered = false;
  let advanceTimer = 0;
  let gamePageWasActive = false;

  const clearAdvanceTimer = () => {
    window.clearTimeout(advanceTimer);
    advanceTimer = 0;
  };

  const renderQuestion = () => {
    clearAdvanceTimer();
    autoNote.hidden = true;
    feedback.textContent = "";
    feedback.className = "rank-game-feedback";

    if (questionIndex >= round.length) {
      progress.textContent = "Runde beendet";
      score.textContent = `${correctAnswers} von ${round.length} richtig`;
      const resultText = correctAnswers === round.length
        ? "Stark – alle Dienstgrade richtig zugeordnet."
        : correctAnswers >= Math.ceil(round.length * .6)
          ? "Gute Runde – mit einer weiteren Mischung festigst du die übrigen Dienstgrade."
          : "Weiterüben lohnt sich – die nächste Runde stellt neue Dienstgrade zusammen.";
      board.innerHTML = `
        <section class="rank-game-result" aria-labelledby="rank-game-result-title">
          <span class="rank-game-result-mark" aria-hidden="true">${correctAnswers}/${round.length}</span>
          <div><small>Auswertung</small><h3 id="rank-game-result-title">${resultText}</h3><p>Über den folgenden Button beginnt eine neu gemischte Runde mit zwanzig neuen Aufgaben.</p></div>
          <button type="button" data-rank-game-new>Neue Runde starten</button>
        </section>`;
      return;
    }

    answered = false;
    const question = round[questionIndex];
    const choices = createRankGameChoices(question.rank);
    progress.textContent = `Aufgabe ${questionIndex + 1} von ${round.length}`;
    score.textContent = `${correctAnswers} ${correctAnswers === 1 ? "Punkt" : "Punkte"}`;

    if (question.mode === "image-to-name") {
      board.innerHTML = `
        <section class="rank-game-prompt">
          <span class="rank-game-direction">Abzeichen → Name</span>
          <h3>Wie heißt dieser Dienstgrad?</h3>
          <div class="rank-game-focus-insignia">
            ${imageWithFallback(commonsFile(question.rank.file), "Zu bestimmendes Dienstgradabzeichen des Heeres")}
          </div>
        </section>
        <div class="rank-game-options rank-game-name-options" role="group" aria-label="Dienstgrad auswählen">
          ${choices.map(choice => `
            <button type="button" data-rank-game-choice="${choice.file}">
              <span>${choice.name}</span><small>${choice.group}</small>
            </button>`).join("")}
        </div>`;
    } else {
      board.innerHTML = `
        <section class="rank-game-prompt rank-game-name-prompt">
          <span class="rank-game-direction">Name → Abzeichen</span>
          <p>Welches Abzeichen gehört zu</p>
          <h3>${question.rank.name}?</h3>
        </section>
        <div class="rank-game-options rank-game-image-options" role="group" aria-label="Dienstgradabzeichen auswählen">
          ${choices.map((choice, index) => `
            <button type="button" data-rank-game-choice="${choice.file}" aria-label="Abzeichen auswählen: Antwort ${String.fromCharCode(65 + index)}">
              <span class="rank-game-choice-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
              ${imageWithFallback(commonsFile(choice.file), `Dienstgradabzeichen, Auswahl ${String.fromCharCode(65 + index)}`)}
            </button>`).join("")}
        </div>`;
    }

    installImageFallbacks(board);
  };

  const startRound = () => {
    round = createRankGameRound();
    questionIndex = 0;
    correctAnswers = 0;
    answered = false;
    renderQuestion();
  };

  board.addEventListener("click", event => {
    const newRound = event.target.closest("[data-rank-game-new]");
    if (newRound) {
      startRound();
      return;
    }

    const choice = event.target.closest("[data-rank-game-choice]");
    if (!choice || answered || !round[questionIndex]) return;
    answered = true;
    const correctRank = round[questionIndex].rank;
    const isCorrect = choice.dataset.rankGameChoice === correctRank.file;
    if (isCorrect) correctAnswers += 1;

    board.querySelectorAll("[data-rank-game-choice]").forEach(button => {
      button.disabled = true;
      if (button.dataset.rankGameChoice === correctRank.file) button.classList.add("is-correct");
      else if (button === choice) button.classList.add("is-wrong");
    });

    score.textContent = `${correctAnswers} ${correctAnswers === 1 ? "Punkt" : "Punkte"}`;
    feedback.classList.add(isCorrect ? "is-correct" : "is-wrong");
    feedback.innerHTML = isCorrect
      ? `<strong>Richtig.</strong> Das ist ${correctRank.name}.`
      : `<strong>Falsch.</strong> Die richtige Zuordnung ist ${correctRank.name}.`;
    autoNote.textContent = questionIndex === round.length - 1
      ? "Auswertung folgt automatisch …"
      : "Nächste Frage folgt automatisch …";
    autoNote.hidden = false;
    advanceTimer = window.setTimeout(() => {
      advanceTimer = 0;
      questionIndex += 1;
      renderQuestion();
    }, RANK_GAME_FEEDBACK_DELAY);
  });

  restart.addEventListener("click", startRound);
  const handleGameRoute = () => {
    const gamePageIsActive = window.location.hash.replace(/^#/, "").split("/")[0] === "dienstgrad-drill";
    if (gamePageIsActive && !gamePageWasActive) startRound();
    if (!gamePageIsActive) clearAdvanceTimer();
    gamePageWasActive = gamePageIsActive;
  };
  window.addEventListener("hashchange", handleGameRoute);
  handleGameRoute();
}

function installNatoLearningGame() {
  const game = document.querySelector("#natospiel");
  const board = document.querySelector("#nato-game-board");
  const progress = document.querySelector("#nato-game-progress");
  const scoreOutput = document.querySelector("#nato-game-score");
  const timerOutput = document.querySelector("#nato-game-timer");
  const feedback = document.querySelector("#nato-game-feedback");
  const autoNote = document.querySelector("#nato-game-auto-note");
  const restart = document.querySelector("#nato-game-restart");
  const scorebar = document.querySelector(".nato-game-scorebar");
  const leaderboardList = document.querySelector("#nato-leaderboard-list");
  const leaderboardStatus = document.querySelector("#nato-leaderboard-status");
  const recordPanel = document.querySelector("#nato-record-panel");
  const recordTitle = document.querySelector("#nato-record-title");
  const recordCopy = document.querySelector("#nato-record-copy");
  const recordForm = document.querySelector("#nato-record-form");
  const recordName = document.querySelector("#nato-record-name");
  if (!game || !board || !progress || !scoreOutput || !timerOutput || !feedback || !autoNote || !restart || !scorebar) return;

  let round = [];
  let retryQueue = [];
  let questionIndex = 0;
  let correctAnswers = 0;
  let firstPass = true;
  let firstPassErrors = 0;
  let answered = false;
  let advanceTimer = 0;
  let stopwatchFrame = 0;
  let stopwatchStartFrame = 0;
  let roundStartedAt = 0;
  let elapsedMs = 0;
  let roundFinished = false;
  let resultEvaluated = false;
  let pendingResult = null;
  let leaderboardEntries = [];
  let gamePageWasActive = false;
  let roundGeneration = 0, sharedSession = null, verifiedRound = null, practiceReason = "";
  const gameRequest = async data => {
    let response;
    try {
      response = await fetch("/api/nato-leaderboard", {
        method:"POST", headers:{"content-type":"application/json","x-dienstbeginn-game":"nato-v1"},
        body:JSON.stringify(data), signal:AbortSignal.timeout(8000)
      });
    } catch { throw new Error("Keine Verbindung zur gemeinsamen Bestenliste. Bitte prüfe deine Internetverbindung."); }
    const payload = await response.json();
    if (data.action === "start" && payload.storage === "local") return payload;
    if (!response.ok) throw new Error(payload.error || "Die gemeinsame Bestenliste ist gerade nicht erreichbar.");
    return payload;
  };

  const clearAdvanceTimer = () => {
    window.clearTimeout(advanceTimer);
    advanceTimer = 0;
  };

  const formatDuration = value => {
    const safeValue = Math.max(0, Math.round(Number(value) || 0));
    const totalTenths = Math.floor(safeValue / 100);
    const minutes = Math.floor(totalTenths / 600);
    const seconds = Math.floor((totalTenths % 600) / 10);
    const tenths = totalTenths % 10;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")},${tenths}`;
  };

  const paintStopwatch = () => {
    timerOutput.textContent = formatDuration(elapsedMs);
  };

  const cancelStopwatchFrame = () => {
    window.cancelAnimationFrame(stopwatchFrame);
    stopwatchFrame = 0;
  };

  const cancelStopwatchStart = () => {
    window.cancelAnimationFrame(stopwatchStartFrame);
    stopwatchStartFrame = 0;
  };

  const tickStopwatch = now => {
    if (!roundStartedAt || roundFinished) return;
    elapsedMs = now - roundStartedAt;
    paintStopwatch();
    stopwatchFrame = window.requestAnimationFrame(tickStopwatch);
  };

  const startStopwatch = () => {
    cancelStopwatchStart();
    cancelStopwatchFrame();
    elapsedMs = 0;
    roundStartedAt = performance.now();
    paintStopwatch();
    stopwatchFrame = window.requestAnimationFrame(tickStopwatch);
  };

  const stopStopwatch = () => {
    if (roundStartedAt && !roundFinished) elapsedMs = performance.now() - roundStartedAt;
    roundFinished = true;
    roundStartedAt = 0;
    cancelStopwatchFrame();
    elapsedMs = Math.round(elapsedMs);
    paintStopwatch();
    return elapsedMs;
  };

  const positionQuestionAndStartStopwatch = () => {
    cancelStopwatchStart();
    stopwatchStartFrame = window.requestAnimationFrame(() => {
      stopwatchStartFrame = window.requestAnimationFrame(() => {
        scorebar.scrollIntoView({ behavior: "auto", block: "start" });
        stopwatchStartFrame = window.requestAnimationFrame(() => {
          stopwatchStartFrame = 0;
          const gamePageIsActive = window.location.hash.replace(/^#/, "").split("/")[0] === "nato-drill";
          if (gamePageIsActive && !roundFinished) startStopwatch();
        });
      });
    });
  };

  const setLeaderboardStatus = (message, state = "") => {
    if (!leaderboardStatus) return;
    leaderboardStatus.textContent = message + (window.natoLeaderboardStorage === "local" ? " Nur auf diesem Gerät gespeichert." : "");
    leaderboardStatus.dataset.state = state;
  };

  const renderLeaderboard = entries => {
    if (!leaderboardList) return;
    leaderboardList.replaceChildren();
    if (!entries.length) {
      const empty = document.createElement("li");
      empty.className = "nato-leaderboard-empty";
      empty.textContent = "Noch kein Ergebnis gespeichert.";
      leaderboardList.append(empty);
      return;
    }

    entries.forEach((entry, index) => {
      const item = document.createElement("li");
      item.className = "nato-leaderboard-entry";
      if (index < 3) item.dataset.medal = String(index + 1);

      const rank = document.createElement("span");
      rank.className = "nato-leaderboard-rank";
      rank.textContent = String(index + 1).padStart(2, "0");

      const name = document.createElement("strong");
      name.textContent = String(entry.displayName || "Unbekannt");

      const result = document.createElement("span");
      result.className = "nato-leaderboard-result";
      result.textContent = `${Number(entry.score) || 0}/26`;

      const time = document.createElement("time");
      time.textContent = formatDuration(entry.durationMs);

      item.append(rank, name, result, time);
      leaderboardList.append(item);
    });
  };

  const loadLeaderboard = async ({ quiet = false } = {}) => {
    if (!quiet) setLeaderboardStatus("Bestenliste wird geladen …", "loading");
    try {
      const response = await window.requestNatoLeaderboard("/api/nato-leaderboard", {
        headers: { accept: "application/json" },
        cache: "no-store"
      });
      const payload = await response.json();
      if (!response.ok || !Array.isArray(payload.entries)) {
        throw new Error(payload.error || "Die Bestenliste ist gerade nicht erreichbar.");
      }
      leaderboardEntries = payload.entries;
      renderLeaderboard(leaderboardEntries);
      if (payload.stale) {
        setLeaderboardStatus("Offline – angezeigt wird die zuletzt geladene Bestenliste. Neue Ergebnisse benötigen eine Internetverbindung.", "offline");
        return null;
      }
      if (!quiet) {
        setLeaderboardStatus(
          leaderboardEntries.length
            ? `${leaderboardEntries.length} ${leaderboardEntries.length === 1 ? "Ergebnis" : "Ergebnisse"} gespeichert.`
            : "Die Bestenliste wartet auf den ersten Eintrag.",
          "ready"
        );
      }
      return leaderboardEntries;
    } catch (error) {
      setLeaderboardStatus(error.message || "Die Bestenliste ist gerade nicht erreichbar.", "error");
      return null;
    }
  };

  const candidateRank = result => {
    const betterEntries = leaderboardEntries.filter(entry => {
      const entryScore = Number(entry.score) || 0;
      const entryDuration = Number(entry.durationMs) || 0;
      return entryScore > result.score || (entryScore === result.score && entryDuration <= result.durationMs);
    });
    return betterEntries.length + 1;
  };

  const reachesLeaderboard = result => {
    if (leaderboardEntries.length < 10) return true;
    const last = leaderboardEntries[leaderboardEntries.length - 1];
    const lastScore = Number(last.score) || 0;
    const lastDuration = Number(last.durationMs) || 0;
    return result.score > lastScore || (result.score === lastScore && result.durationMs < lastDuration);
  };

  const hideRecordPanel = () => {
    pendingResult = null;
    if (recordPanel) recordPanel.hidden = true;
    if (recordForm) recordForm.reset();
  };

  const showRecordPanel = result => {
    if (!recordPanel || !recordTitle || !recordCopy || !recordName) return;
    pendingResult = result;
    const rank = candidateRank(result);
    recordTitle.textContent = rank === 1 ? "Rekord geknackt!" : `Bestenlisten-Platz ${rank} erreicht`;
    recordCopy.textContent = `Deine Zeit: ${formatDuration(result.durationMs)}. Trage jetzt deinen Namen oder dein Kürzel ein.`;
    recordPanel.hidden = false;
  };

  const evaluateCompletedRound = async result => {
    const generation = roundGeneration;
    if (practiceReason || (!verifiedRound && window.natoLeaderboardStorage !== "local")) {
      setLeaderboardStatus("Übungsrunde abgeschlossen. Für einen Bestenlisten-Eintrag starte bitte eine neue Runde mit Internetverbindung.", "ready");
      return;
    }
    if (verifiedRound) result = {...result, ...verifiedRound};
    const entries = await loadLeaderboard({ quiet: true });
    if (!entries || generation !== roundGeneration) return;
    if (reachesLeaderboard(result)) {
      showRecordPanel(result);
      setLeaderboardStatus("Dein Ergebnis ist schnell genug für die Bestenliste.", "record");
    } else {
      hideRecordPanel();
      setLeaderboardStatus("Diesmal noch kein Bestenlisten-Platz – die nächste Runde wartet.", "ready");
    }
  };

  const renderStartScreen = () => {
    roundGeneration++; sharedSession = null; verifiedRound = null; practiceReason = "";
    restart.disabled = false;
    clearAdvanceTimer();
    cancelStopwatchStart();
    cancelStopwatchFrame();
    round = [];
    retryQueue = [];
    questionIndex = 0;
    correctAnswers = 0;
    firstPass = true;
    firstPassErrors = 0;
    answered = false;
    roundStartedAt = 0;
    elapsedMs = 0;
    roundFinished = true;
    resultEvaluated = false;
    hideRecordPanel();
    restart.hidden = true;
    paintStopwatch();
    progress.textContent = "Noch nicht gestartet";
    scoreOutput.textContent = "0 von 26 sicher";
    feedback.textContent = "";
    feedback.className = "rank-game-feedback";
    autoNote.hidden = true;
    board.innerHTML = `
      <section class="nato-game-start" aria-labelledby="nato-game-start-title">
        <span class="nato-game-start-mark" aria-hidden="true">A–Z</span>
        <div>
          <small>Bereit?</small>
          <h3 id="nato-game-start-title">Alphabet-Drill starten</h3>
          <p>Nach dem Start beginnen die erste Frage und die Zeitmessung.</p>
        </div>
        <button type="button" data-nato-game-start>Spiel starten <span aria-hidden="true">→</span></button>
      </section>`;
  };

  const renderQuestion = () => {
    clearAdvanceTimer();
    autoNote.hidden = true;
    feedback.textContent = "";
    feedback.className = "rank-game-feedback";

    if (questionIndex >= round.length) {
      progress.textContent = "Alle Buchstaben richtig";
      scoreOutput.textContent = "26 von 26 sicher";
      const repeatedLabel = firstPassErrors === 1 ? "Ein Buchstabe wurde" : `${firstPassErrors} Buchstaben wurden`;
      const resultText = "Geschafft – das gesamte NATO-Alphabet sitzt.";
      const resultCopy = firstPassErrors === 0
        ? `Alle Buchstaben wurden richtig zugeordnet. Deine Gesamtzeit: <strong>${formatDuration(elapsedMs)}</strong>.`
        : `${repeatedLabel} wiederholt, bis alles stimmte. Deine Gesamtzeit: <strong>${formatDuration(elapsedMs)}</strong>.`;
      board.innerHTML = `
        <section class="rank-game-result" aria-labelledby="nato-game-result-title">
          <span class="rank-game-result-mark" aria-hidden="true">26/26</span>
          <div><small>Auswertung</small><h3 id="nato-game-result-title">${resultText}</h3><p>${resultCopy}</p></div>
          <button type="button" data-nato-game-new>Neue Runde starten</button>
        </section>`;
      if (!resultEvaluated) {
        resultEvaluated = true;
        if (firstPassErrors === 0) {
          void evaluateCompletedRound({ score: 26, durationMs: elapsedMs, firstPassPerfect: true });
        } else {
          hideRecordPanel();
          setLeaderboardStatus("Runde abgeschlossen. Die nächste Runde wartet.", "ready");
        }
      }
      return;
    }

    answered = false;
    const [letter, correctWord] = round[questionIndex];
    const choices = shuffledCopy([correctWord, ...(natoDistractors[letter] || [])]);
    progress.textContent = firstPass
      ? `Erste Runde · ${questionIndex + 1}/26`
      : `Wiederholung · ${questionIndex + 1}/${round.length}`;
    scoreOutput.textContent = `${correctAnswers} von 26 sicher`;
    board.innerHTML = `
      <section class="rank-game-prompt nato-game-prompt">
        <span class="rank-game-direction">Buchstabe → NATO-Wort</span>
        <span class="nato-game-letter" aria-label="Buchstabe ${letter}">${letter}</span>
        <h3>Wie lautet das richtige Buchstabierwort?</h3>
      </section>
      <div class="rank-game-options nato-game-options" role="group" aria-label="Buchstabierwort für ${letter} auswählen">
        ${choices.map((choice, index) => `
          <button type="button" data-nato-game-choice="${choice}">
            <span class="nato-game-option-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
            <strong>${choice}</strong>
          </button>`).join("")}
      </div>`;
  };

  const startRound = async () => {
    const generation = ++roundGeneration;
    clearAdvanceTimer(); cancelStopwatchFrame(); cancelStopwatchStart(); hideRecordPanel();
    verifiedRound = null; sharedSession = null; practiceReason = "";
    restart.disabled = true;
    board.querySelectorAll("button").forEach(button => { button.disabled = true; });
    let session;
    try { session = await gameRequest({action:"start"}); }
    catch (error) { practiceReason = error.message; }
    if (generation !== roundGeneration) return;
    round = session?.letters ? session.letters.map(letter => natoAlphabet.find(entry => entry[0] === letter)) : shuffledCopy(natoAlphabet);
    sharedSession = session?.sessionId || null;
    if (!sharedSession && session?.storage !== "local" && !practiceReason) practiceReason = "Diese Runde wird nur zum Üben gespielt.";
    retryQueue = []; questionIndex = 0; correctAnswers = 0; firstPass = true; firstPassErrors = 0;
    answered = false; roundFinished = false; resultEvaluated = false; elapsedMs = 0; roundStartedAt = 0;
    paintStopwatch(); restart.hidden = false; restart.disabled = false;
    if (practiceReason) setLeaderboardStatus(practiceReason + " Du kannst weiter üben; diese Runde zählt nicht für die gemeinsame Bestenliste.", "error");
    renderQuestion(); positionQuestionAndStartStopwatch();
  };
  board.addEventListener("click", async event => {
    const startButton = event.target.closest("[data-nato-game-start]");
    if (startButton) {
      startRound();
      return;
    }

    const newRound = event.target.closest("[data-nato-game-new]");
    if (newRound) {
      startRound();
      return;
    }

    const choice = event.target.closest("[data-nato-game-choice]");
    if (!choice || answered || !round[questionIndex]) return;
    answered = true;
    const correctWord = round[questionIndex][1];
    const isCorrect = choice.dataset.natoGameChoice === correctWord;
    if (isCorrect) {
      correctAnswers += 1;
    } else {
      retryQueue.push(round[questionIndex]);
      if (firstPass) firstPassErrors += 1;
    }

    board.querySelectorAll("[data-nato-game-choice]").forEach(button => {
      button.disabled = true;
      if (button.dataset.natoGameChoice === correctWord) button.classList.add("is-correct");
      else if (button === choice) button.classList.add("is-wrong");
    });

    scoreOutput.textContent = `${correctAnswers} von 26 sicher`;
    feedback.classList.add(isCorrect ? "is-correct" : "is-wrong");
    feedback.innerHTML = isCorrect
      ? `<strong>Richtig.</strong> ${round[questionIndex][0]} wird mit ${correctWord} buchstabiert.`
      : `<strong>Falsch.</strong> Richtig ist ${correctWord}.`;
    const generation = roundGeneration;
    if (sharedSession && firstPass) {
      try {
        const verified = await gameRequest({action:"answer",sessionId:sharedSession,index:questionIndex,word:choice.dataset.natoGameChoice});
        if (generation !== roundGeneration) return;
        if (verified.complete && verified.verified) verifiedRound = {sessionId:sharedSession,durationMs:verified.durationMs};
      } catch (error) {
        if (generation !== roundGeneration) return;
        practiceReason = error.message; sharedSession = null;
        setLeaderboardStatus(error.message + " Du kannst die Runde als Übung fortsetzen.", "error");
      }
    }
    const batchIsComplete = questionIndex === round.length - 1;
    autoNote.textContent = batchIsComplete
      ? retryQueue.length
        ? "Falsche Antworten werden gleich wiederholt …"
        : "Auswertung folgt automatisch …"
      : "Nächste Frage folgt automatisch …";
    autoNote.hidden = false;
    advanceTimer = window.setTimeout(() => {
      advanceTimer = 0;
      questionIndex += 1;
      if (questionIndex >= round.length && retryQueue.length) {
        round = shuffledCopy(retryQueue);
        retryQueue = [];
        questionIndex = 0;
        firstPass = false;
      } else if (questionIndex >= round.length) {
        stopStopwatch();
        if (verifiedRound) { elapsedMs = verifiedRound.durationMs; paintStopwatch(); }
      }
      renderQuestion();
    }, RANK_GAME_FEEDBACK_DELAY);
  });

  recordForm?.addEventListener("submit", async event => {
    event.preventDefault();
    if (!pendingResult || !recordName) return;
    const generation = roundGeneration;
    const submittedResult = pendingResult;
    const submitButton = recordForm.querySelector("button[type='submit']");
    if (submitButton) submitButton.disabled = true;
    setLeaderboardStatus("Ergebnis wird gespeichert …", "loading");

    try {
      const response = await window.requestNatoLeaderboard("/api/nato-leaderboard", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-dienstbeginn-game": "nato-v1"
        },
        body: JSON.stringify({
          name: recordName.value,
          sessionId: submittedResult.sessionId,
          score: submittedResult.score,
          durationMs: submittedResult.durationMs,
          firstPassPerfect: true
        })
      });
      const payload = await response.json();
      if (generation !== roundGeneration) return;
      if (Array.isArray(payload.entries)) {
        leaderboardEntries = payload.entries;
        renderLeaderboard(leaderboardEntries);
      }
      if (!response.ok || !payload.accepted) {
        if (response.status === 409) {
          hideRecordPanel();
          setLeaderboardStatus("Die Bestenliste hat sich inzwischen geändert. Starte eine neue Runde für den nächsten Versuch.", "ready");
          return;
        }
        throw new Error(payload.error || "Der Eintrag konnte nicht gespeichert werden.");
      }

      const savedRank = Number(payload.rank) || candidateRank(submittedResult);
      hideRecordPanel();
      setLeaderboardStatus(
        savedRank === 1
          ? "Neuer Rekord – dein Eintrag steht jetzt auf Platz 1."
          : `Geschafft – dein Eintrag steht jetzt auf Platz ${savedRank}.`,
        "success"
      );
    } catch (error) {
      setLeaderboardStatus(error.message || "Der Eintrag konnte gerade nicht gespeichert werden.", "error");
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });

  restart.addEventListener("click", startRound);
  const handleGameRoute = () => {
    const gamePageIsActive = window.location.hash.replace(/^#/, "").split("/")[0] === "nato-drill";
    if (gamePageIsActive && !gamePageWasActive) renderStartScreen();
    if (!gamePageIsActive) {
      roundGeneration++;
      sharedSession = null;
      clearAdvanceTimer();
      cancelStopwatchStart();
      cancelStopwatchFrame();
      roundStartedAt = 0;
    }
    gamePageWasActive = gamePageIsActive;
  };
  window.addEventListener("hashchange", handleGameRoute);
  window.addEventListener("online", () => { void loadLeaderboard(); });
  void loadLeaderboard();
  handleGameRoute();
}

const QUIZ_STORAGE_KEY = "dienstbeginn-quiz-v8";
let quizState = { answered: {}, roundIds: [] };
let activeQuiz = null;

const quizCategoryConfig = [
  { category: "Waffen", count: 5 },
  { category: "Sicherheitsbestimmungen", count: 4, fixed: true },
  { category: "Bundeswehr-Struktur", count: 5 },
  { category: "Truppengattungen", count: 5, imageCount: 2 },
  { category: "Abkürzungen", count: 5 },
  { category: "NATO-Alphabet", count: 5 },
  { category: "Dienstgrade", count: 5, imageCount: 5 },
  { category: "Pflichten & Befehle", count: 5 },
  { category: "Meldungen", count: 5 },
  { category: "Orientieren im Gelände", count: 5 }
];

function prepareQuizQuestion(question, value) {
  const choices = shuffledCopy(question.options.map((option, index) => ({ option, correct: index === question.answer })));
  return {
    ...question,
    value,
    options: choices.map(choice => choice.option),
    answer: choices.findIndex(choice => choice.correct)
  };
}

function selectQuizCategoryQuestions(config, previousIds = []) {
  const pool = quizQuestionBank.filter(question => question.category === config.category);
  const poolIds = new Set(pool.map(question => question.id));
  const previousSignature = previousIds.filter(id => poolIds.has(id)).sort().join("|");
  let selected = [];

  if (config.fixed) {
    selected = pool.slice(0, config.count);
  } else {
    for (let attempt = 0; attempt < 16; attempt += 1) {
      if (config.imageCount) {
        const withImage = shuffledCopy(pool.filter(question => question.image)).slice(0, config.imageCount);
        const withoutImage = shuffledCopy(pool.filter(question => !question.image)).slice(0, config.count - withImage.length);
        selected = shuffledCopy([...withImage, ...withoutImage]);
      } else {
        selected = shuffledCopy(pool).slice(0, config.count);
      }
      if (selected.map(question => question.id).sort().join("|") !== previousSignature) break;
    }
  }

  return selected.map((question, index) => prepareQuizQuestion(question, (index + 1) * 100));
}

function createQuizRound(previousIds = []) {
  return quizCategoryConfig.flatMap(config => selectQuizCategoryQuestions(config, previousIds));
}

function hydrateQuizRound(roundIds) {
  if (!Array.isArray(roundIds)) return null;
  if (new Set(roundIds).size !== roundIds.length) return null;
  const bankById = new Map(quizQuestionBank.map(question => [question.id, question]));
  const questions = roundIds.map(id => bankById.get(id));
  if (questions.some(question => !question)) return null;

  const hydrated = [];
  for (const config of quizCategoryConfig) {
    const categoryQuestions = questions.filter(question => question.category === config.category);
    if (categoryQuestions.length !== config.count) return null;
    hydrated.push(...categoryQuestions.map((question, index) => prepareQuizQuestion(question, (index + 1) * 100)));
  }
  return hydrated;
}

function startFreshQuizRound(previousIds = []) {
  quizQuestions = createQuizRound(previousIds);
  quizState = { answered: {}, roundIds: quizQuestions.map(question => question.id) };
}

function loadQuizState() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(QUIZ_STORAGE_KEY) || "null");
    const hydrated = saved ? hydrateQuizRound(saved.roundIds) : null;
    if (hydrated && typeof saved.answered === "object" && saved.answered !== null) {
      quizQuestions = hydrated;
      quizState = { answered: saved.answered, roundIds: saved.roundIds };
      return;
    }
  } catch { /* Start a fresh round when browser storage is unavailable or invalid. */ }
  startFreshQuizRound();
}

function saveQuizState() {
  try { sessionStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(quizState)); } catch { /* The game still works for the current page view. */ }
}

function currentQuizScore() {
  return quizQuestions.reduce((sum, question) => sum + (quizState.answered[question.id] === "correct" ? question.value : 0), 0);
}

function updateQuizScoreboard() {
  const answeredCount = Object.keys(quizState.answered).filter(id => quizQuestions.some(question => question.id === id)).length;
  const score = currentQuizScore();
  const maxScore = quizQuestions.reduce((sum, question) => sum + question.value, 0);
  document.querySelector("#quiz-score").textContent = score.toLocaleString("de-DE");
  document.querySelector("#quiz-progress").textContent = answeredCount;
  document.querySelector("#quiz-total").textContent = quizQuestions.length;
  document.querySelector("#quiz-final-score").textContent = score.toLocaleString("de-DE");
  document.querySelector("#quiz-max-score").textContent = maxScore.toLocaleString("de-DE");
  document.querySelector("#quiz-finish").hidden = answeredCount !== quizQuestions.length;
}

function renderQuizBoard() {
  const categories = [...new Map(quizQuestions.map(question => [question.short, question.category])).entries()];
  document.querySelector("#quiz-summary").textContent = `${categories.length} Themen · ${quizQuestions.length} Fragen · Punkte sammeln`;
  document.querySelector("#quiz-board").innerHTML = categories.map(([short, full]) => `
    <section class="quiz-column" aria-label="${full}">
      <h2 title="${full}">${short}</h2>
      ${quizQuestions.filter(question => question.short === short).map(question => {
        const result = quizState.answered[question.id];
        return `<button class="quiz-tile${result ? ` ${result}` : ""}" type="button" data-quiz-id="${question.id}" ${result ? "disabled" : ""} aria-label="${full} für ${question.value} Punkte${result ? `, beantwortet: ${result === "correct" ? "richtig" : "falsch"}` : ""}">
          <span>${question.value}</span>
        </button>`;
      }).join("")}
    </section>`).join("");

  document.querySelectorAll("[data-quiz-id]").forEach(button => {
    button.addEventListener("click", () => openQuizQuestion(button.dataset.quizId));
  });
  updateQuizScoreboard();
}

function openQuizQuestion(id) {
  const question = quizQuestions.find(item => item.id === id);
  if (!question || quizState.answered[id]) return;
  activeQuiz = question;
  const dialog = document.querySelector("#quiz-dialog");
  document.querySelector("#quiz-category").textContent = question.category;
  document.querySelector("#quiz-value").textContent = question.value;
  document.querySelector("#quiz-question").textContent = question.question;
  const media = document.querySelector("#quiz-question-media");
  if (question.image) {
    media.innerHTML = `${imageWithFallback(question.image, question.imageAlt || "Bild zur Frage")}${question.imageSource ? `<a href="${question.imageSource}" target="_blank" rel="noreferrer">Bildquelle: Wikimedia Commons ↗</a>` : ""}`;
    media.hidden = false;
    installImageFallbacks(media);
  } else {
    media.hidden = true;
    media.replaceChildren();
  }
  document.querySelector("#quiz-feedback").hidden = true;
  document.querySelector("#quiz-continue").hidden = true;
  document.querySelector("#quiz-options").innerHTML = question.options.map((option, index) => `<button class="quiz-option" type="button" data-answer-index="${index}"><span>${String.fromCharCode(65 + index)}</span>${option}</button>`).join("");
  document.querySelectorAll("[data-answer-index]").forEach(button => {
    button.addEventListener("click", () => answerQuizQuestion(Number(button.dataset.answerIndex)));
  });
  dialog.showModal();
}

function answerQuizQuestion(selectedIndex) {
  if (!activeQuiz || quizState.answered[activeQuiz.id]) return;
  const isCorrect = selectedIndex === activeQuiz.answer;
  quizState.answered[activeQuiz.id] = isCorrect ? "correct" : "wrong";
  saveQuizState();

  document.querySelectorAll("[data-answer-index]").forEach((button, index) => {
    button.disabled = true;
    if (index === activeQuiz.answer) button.classList.add("correct");
    if (index === selectedIndex && !isCorrect) button.classList.add("wrong");
  });

  const feedback = document.querySelector("#quiz-feedback");
  feedback.className = `quiz-feedback ${isCorrect ? "correct" : "wrong"}`;
  feedback.innerHTML = isCorrect
    ? `<strong>Richtig!</strong> +${activeQuiz.value} Punkte`
    : `<strong>Noch nicht.</strong> Richtig ist: ${activeQuiz.options[activeQuiz.answer]}`;
  if (activeQuiz.explanation) {
    const explanation = document.createElement("p");
    explanation.textContent = activeQuiz.explanation;
    feedback.append(explanation);
    const lessonLink = document.createElement("a");
    lessonLink.href = "#pflichten";
    lessonLink.textContent = "Im Thema nachlesen →";
    lessonLink.addEventListener("click", () => document.querySelector("#quiz-dialog").close());
    feedback.append(lessonLink);
  }
  feedback.hidden = false;
  document.querySelector("#quiz-continue").hidden = false;
  renderQuizBoard();
}

function installQuiz() {
  const dialog = document.querySelector("#quiz-dialog");
  loadQuizState();
  renderQuizBoard();
  document.querySelector("#quiz-close").addEventListener("click", () => dialog.close());
  document.querySelector("#quiz-continue").addEventListener("click", () => dialog.close());
  document.querySelector("#quiz-reset").addEventListener("click", () => {
    const previousIds = quizState.roundIds || [];
    startFreshQuizRound(previousIds);
    activeQuiz = null;
    saveQuizState();
    if (dialog.open) dialog.close();
    renderQuizBoard();
  });
}

const ORIENTATION_PRACTICE_STORAGE_KEY = "dienstbeginn-orientierung-uebungen-v1";
const orientationPracticeLevels = [
  {
    id: "order",
    title: "Leserichtung festigen",
    difficulty: "Leicht",
    instruction: "In welcher Reihenfolge wird der Ziffernanteil einer Gitterkoordinate gelesen?",
    map: "order"
  },
  {
    id: "square",
    title: "Ein 1-km-Gitterfeld bestimmen",
    difficulty: "Leicht",
    instruction: "Bestimme das rot markierte 1-km-Feld. Nimm zuerst die senkrechte Linie links vom Feld, danach die waagerechte Linie unter dem Feld.",
    map: "square"
  },
  {
    id: "precision",
    title: "Auf 100 Meter genau lesen",
    difficulty: "Mittel",
    instruction: "Das große Quadrat ist 1 km breit und in zehn gleiche 100-m-Schritte geteilt. Gib die südwestliche Ecke des rot markierten 100-m-Feldes an.",
    map: "precision"
  },
  {
    id: "plot",
    title: "Eine Koordinate im Gitter setzen",
    difficulty: "Fortgeschritten",
    instruction: "Übertrage die vorgegebene 3+3-stellige Koordinate in das 1-km-Quadrat. Tippe das richtige 100-m-Feld an oder wähle die Teilungen unter der Grafik.",
    map: "plot"
  },
  {
    id: "route",
    title: "Route und Maßstab verbinden",
    difficulty: "Anspruchsvoll",
    instruction: "Die rote Route verläuft waagerecht und senkrecht durch ein 1-km-Gitter. Ermittle zuerst die Geländestrecke und rechne sie dann in die Kartenstrecke um.",
    map: "route"
  }
];

const orientationPracticeVariants = {
  square: [
    { easting: 35, northing: 63 },
    { easting: 36, northing: 62 },
    { easting: 34, northing: 64 }
  ],
  precision: [
    { baseEasting: 36, baseNorthing: 63, eastingDigit: 4, northingDigit: 7 },
    { baseEasting: 35, baseNorthing: 62, eastingDigit: 7, northingDigit: 4 },
    { baseEasting: 34, baseNorthing: 61, eastingDigit: 2, northingDigit: 8 }
  ],
  plot: [
    { baseEasting: 35, baseNorthing: 62, eastingDigit: 7, northingDigit: 4 },
    { baseEasting: 36, baseNorthing: 63, eastingDigit: 3, northingDigit: 8 },
    { baseEasting: 34, baseNorthing: 61, eastingDigit: 6, northingDigit: 2 }
  ],
  route: [
    { scale: 50000, eastKilometers: 2, northKilometers: 2, groundKilometers: 4, mapCentimeters: 8 },
    { scale: 25000, eastKilometers: 1, northKilometers: 2, groundKilometers: 3, mapCentimeters: 12 },
    { scale: 25000, eastKilometers: 3, northKilometers: 1, groundKilometers: 4, mapCentimeters: 16 }
  ]
};

let orientationPracticeState = {
  level: 0,
  completed: [],
  round: 0,
  plotSelection: null
};

function orientationPracticeVariant(levelIndex = orientationPracticeState.level) {
  const level = orientationPracticeLevels[levelIndex];
  const variants = orientationPracticeVariants[level.id];
  return variants ? variants[orientationPracticeState.round % variants.length] : null;
}

function practiceOverviewGridSvg(mode, variant) {
  const left = 70;
  const top = 45;
  const size = 320;
  const step = 80;
  const bottom = top + size;
  const majorLines = Array.from({ length: 5 }, (_, index) => {
    const offset = index * step;
    return `<path class='practice-map-major' d='M${left + offset} ${top}V${bottom}M${left} ${top + offset}H${left + size}'/>`;
  }).join("");
  const eastingLabels = Array.from({ length: 5 }, (_, index) =>
    `<text class='practice-map-label' x='${left + index * step}' y='393' text-anchor='middle'>${34 + index}</text>`
  ).join("");
  const northingLabels = Array.from({ length: 5 }, (_, index) =>
    `<text class='practice-map-label' x='43' y='${bottom - index * step + 5}' text-anchor='middle'>${61 + index}</text>`
  ).join("");

  let overlay = "";
  let title = "Fiktives Kartengitter mit Ostwerten unten, Nordwerten links und Gitternord oben.";
  if (mode === "order") {
    overlay = `
      <path class='practice-map-arrow' d='M112 417H314m-14-10 14 10-14 10'/>
      <text class='practice-map-axis' x='213' y='409' text-anchor='middle'>zuerst Ostwert</text>
      <path class='practice-map-arrow' d='M19 326V126m-10 14 10-14 10 14'/>
      <text class='practice-map-axis' x='31' y='225' text-anchor='middle' transform='rotate(-90 31 225)'>danach Nordwert</text>`;
  }
  if (mode === "square") {
    const x = left + (variant.easting - 34) * step;
    const y = bottom - (variant.northing - 61 + 1) * step;
    overlay = `<rect class='practice-map-target-cell' x='${x}' y='${y}' width='${step}' height='${step}' rx='3'/>`;
    title = "Fiktives Vier-mal-vier-Kilometer-Gitter mit einem rot markierten Ein-Kilometer-Feld.";
  }
  if (mode === "route") {
    const startX = left + step / 2;
    const startY = bottom - step / 2;
    const turnX = startX + variant.eastKilometers * step;
    const targetY = startY - variant.northKilometers * step;
    overlay = `
      <rect class='practice-map-scale' x='137' y='8' width='166' height='28' rx='8'/>
      <text class='practice-map-scale-text' x='220' y='27' text-anchor='middle'>Maßstab 1 : ${variant.scale.toLocaleString("de-DE")}</text>
      <path class='practice-map-route' d='M${startX} ${startY}H${turnX}V${targetY}'/>
      <circle class='practice-map-route-point' cx='${startX}' cy='${startY}' r='15'/>
      <text class='practice-map-route-label' x='${startX}' y='${startY + 5}' text-anchor='middle'>S</text>
      <circle class='practice-map-route-point' cx='${turnX}' cy='${targetY}' r='15'/>
      <text class='practice-map-route-label' x='${turnX}' y='${targetY + 5}' text-anchor='middle'>Z</text>
      <circle cx='${turnX}' cy='${startY}' r='7' fill='#fff' stroke='#d5120c' stroke-width='4'/>`;
    title = "Fiktives Kilometergitter mit einer roten, rechtwinkligen Route von Start S zu Ziel Z.";
  }

  return `<svg viewBox='0 0 440 440' role='img' aria-label='${title}'>
    <rect class='practice-map-bg' width='440' height='440'/>
    <rect x='${left}' y='${top}' width='${size}' height='${size}' fill='#e9e5d8'/>
    ${majorLines}
    <rect class='practice-map-neatline' x='${left}' y='${top}' width='${size}' height='${size}'/>
    ${eastingLabels}
    ${northingLabels}
    <text class='practice-map-axis' x='230' y='438' text-anchor='middle'>Ostwert →</text>
    <text class='practice-map-axis' x='14' y='205' text-anchor='middle' transform='rotate(-90 14 205)'>Nordwert →</text>
    <text class='practice-map-label' x='414' y='19' text-anchor='middle'>N</text>
    <path class='practice-map-north' d='M414 25 402 56l12-7 12 7z'/>
    ${overlay}
  </svg>`;
}

function practiceDetailedGridSvg(mode, variant, selection) {
  const left = 70;
  const top = 45;
  const size = 320;
  const cell = 32;
  const bottom = top + size;
  const minorLines = Array.from({ length: 11 }, (_, index) => {
    const offset = index * cell;
    const className = index === 0 || index === 10 ? "practice-map-major" : "practice-map-minor";
    return `<path class='${className}' d='M${left + offset} ${top}V${bottom}M${left} ${top + offset}H${left + size}'/>`;
  }).join("");
  const subdivisionEast = Array.from({ length: 10 }, (_, index) =>
    `<text class='practice-map-small-label' x='${left + index * cell}' y='414' text-anchor='middle'>${index}</text>`
  ).join("");
  const subdivisionNorth = Array.from({ length: 10 }, (_, index) =>
    `<text class='practice-map-small-label' x='48' y='${bottom - index * cell + 4}' text-anchor='middle'>${index}</text>`
  ).join("");
  const targetX = left + variant.eastingDigit * cell;
  const targetY = bottom - (variant.northingDigit + 1) * cell;
  const target = mode === "precision"
    ? `<rect class='practice-map-target-cell' x='${targetX}' y='${targetY}' width='${cell}' height='${cell}'/>`
    : "";
  const selected = selection
    ? `<rect class='practice-map-selected-cell' x='${left + selection.eastingDigit * cell}' y='${bottom - (selection.northingDigit + 1) * cell}' width='${cell}' height='${cell}'/>`
    : "";
  const dataAttribute = mode === "plot" ? " data-practice-map='plot'" : "";
  const label = mode === "plot"
    ? "Fiktives Ein-Kilometer-Quadrat mit zehn mal zehn auswählbaren Feldern zu je einhundert Metern."
    : "Fiktives Ein-Kilometer-Quadrat mit zehn mal zehn Feldern zu je einhundert Metern und rot markiertem Zielfeld.";

  return `<svg viewBox='0 0 440 440' role='img' aria-label='${label}'${dataAttribute}>
    <rect class='practice-map-bg' width='440' height='440'/>
    <rect x='${left}' y='${top}' width='${size}' height='${size}' fill='#e9e5d8'/>
    ${minorLines}
    ${target}
    ${selected}
    <rect class='practice-map-neatline' x='${left}' y='${top}' width='${size}' height='${size}'/>
    <text class='practice-map-label' x='${left}' y='392' text-anchor='middle'>${variant.baseEasting}</text>
    <text class='practice-map-label' x='${left + size}' y='392' text-anchor='middle'>${variant.baseEasting + 1}</text>
    <text class='practice-map-label' x='27' y='${bottom + 5}' text-anchor='middle'>${variant.baseNorthing}</text>
    <text class='practice-map-label' x='27' y='${top + 5}' text-anchor='middle'>${variant.baseNorthing + 1}</text>
    ${subdivisionEast}
    ${subdivisionNorth}
    <text class='practice-map-axis' x='230' y='437' text-anchor='middle'>Ostteilung · 100 m</text>
    <text class='practice-map-axis' x='13' y='205' text-anchor='middle' transform='rotate(-90 13 205)'>Nordteilung · 100 m</text>
    <text class='practice-map-label' x='414' y='19' text-anchor='middle'>N</text>
    <path class='practice-map-north' d='M414 25 402 56l12-7 12 7z'/>
  </svg>`;
}

function orientationPracticeMapMarkup() {
  const level = orientationPracticeLevels[orientationPracticeState.level];
  const variant = orientationPracticeVariant();
  if (level.map === "precision" || level.map === "plot") {
    return practiceDetailedGridSvg(level.map, variant, orientationPracticeState.plotSelection);
  }
  return practiceOverviewGridSvg(level.map, variant);
}

function orientationPracticeKeyMarkup() {
  const level = orientationPracticeLevels[orientationPracticeState.level];
  if (level.map === "route") return "<span><i></i> geplante Route</span><span><i class='grid'></i> 1 großes Feld = 1 km</span>";
  if (level.map === "plot") return "<span><i class='selection'></i> deine Auswahl</span><span><i class='grid'></i> 1 kleines Feld = 100 m</span>";
  if (level.map === "precision") return "<span><i></i> gesuchtes 100-m-Feld</span><span><i class='grid'></i> 10 Teilungen = 1 km</span>";
  if (level.map === "square") return "<span><i></i> gesuchtes 1-km-Feld</span><span><i class='grid'></i> 1 großes Feld = 1 km</span>";
  return "<span><i class='grid'></i> senkrecht = Ostwert</span><span><i class='grid'></i> waagerecht = Nordwert</span>";
}

function orientationPracticeTaskMarkup() {
  const level = orientationPracticeLevels[orientationPracticeState.level];
  const variant = orientationPracticeVariant();
  if (level.id === "order") {
    return `<fieldset>
      <legend>Wähle die richtige Arbeitsrichtung.</legend>
      <label class='orientation-choice'><input type='radio' name='orientation-order' value='east-north'><span>Erst Ostwert, dann Nordwert</span></label>
      <label class='orientation-choice'><input type='radio' name='orientation-order' value='north-east'><span>Erst Nordwert, dann Ostwert</span></label>
      <label class='orientation-choice'><input type='radio' name='orientation-order' value='largest-first'><span>Zuerst immer die größere Zahl</span></label>
    </fieldset>`;
  }
  if (level.id === "square") {
    return `<div class='orientation-coordinate-prefix'>Vorgegeben: <code>32U MA</code> · Gesucht: <strong>2 + 2 Ziffern</strong></div>
      <div class='orientation-coordinate-fields'>
        <label><span>Ostwert · 2 Ziffern</span><input id='orientation-easting' type='text' inputmode='numeric' maxlength='2' autocomplete='off' aria-describedby='orientation-square-hint'></label>
        <label><span>Nordwert · 2 Ziffern</span><input id='orientation-northing' type='text' inputmode='numeric' maxlength='2' autocomplete='off' aria-describedby='orientation-square-hint'></label>
      </div>
      <small id='orientation-square-hint'>Schreibweise: <strong>32U MA __ __</strong></small>`;
  }
  if (level.id === "precision") {
    return `<div class='orientation-coordinate-prefix'>Vorgegeben: <code>32U MA</code> · Gesucht: <strong>3 + 3 Ziffern</strong></div>
      <div class='orientation-coordinate-fields'>
        <label><span>Ostwert · 3 Ziffern</span><input id='orientation-easting' type='text' inputmode='numeric' maxlength='3' autocomplete='off' aria-describedby='orientation-precision-hint'></label>
        <label><span>Nordwert · 3 Ziffern</span><input id='orientation-northing' type='text' inputmode='numeric' maxlength='3' autocomplete='off' aria-describedby='orientation-precision-hint'></label>
      </div>
      <small id='orientation-precision-hint'>Die dritte Ziffer nennt die 100-m-Teilung innerhalb des 1-km-Feldes.</small>`;
  }
  if (level.id === "plot") {
    const coordinate = `32U MA ${variant.baseEasting}${variant.eastingDigit} ${variant.baseNorthing}${variant.northingDigit}`;
    const options = Array.from({ length: 10 }, (_, digit) => `<option value='${digit}'>${digit}</option>`).join("");
    return `<div class='orientation-coordinate-prefix'>Setze die Koordinate <code>${coordinate}</code>.</div>
      <div class='orientation-plot-fields'>
        <label><span>Ostteilung</span><select id='orientation-plot-easting'><option value=''>–</option>${options}</select><small>Schritt nach rechts</small></label>
        <label><span>Nordteilung</span><select id='orientation-plot-northing'><option value=''>–</option>${options}</select><small>Schritt nach oben</small></label>
      </div>
      <p class='orientation-plot-hint'>Die Auswahlfelder sind die barrierearme Alternative zum Antippen der Grafik.</p>`;
  }
  return `<div class='orientation-coordinate-prefix'>Kartengitter: <strong>1 großes Feld = 1 km</strong> · Maßstab: <code>1 : ${variant.scale.toLocaleString("de-DE")}</code></div>
    <div class='orientation-route-fields'>
      <label><span>Geländestrecke in km</span><input id='orientation-route-km' type='text' inputmode='decimal' autocomplete='off'><small>Alle roten Teilstrecken addieren.</small></label>
      <label><span>Kartenstrecke in cm</span><input id='orientation-route-cm' type='text' inputmode='decimal' autocomplete='off'><small>Mit dem angegebenen Maßstab umrechnen.</small></label>
    </div>
    <p class='orientation-route-note'>Geübt wird hier nur die Strecken- und Maßstabsrechnung. Die taktische oder geländebezogene Eignung eines Weges wird nicht bewertet.</p>`;
}

function saveOrientationPracticeState() {
  try {
    localStorage.setItem(ORIENTATION_PRACTICE_STORAGE_KEY, JSON.stringify({
      level: orientationPracticeState.level,
      completed: orientationPracticeState.completed,
      round: orientationPracticeState.round
    }));
  } catch { /* Die Übung bleibt auch ohne lokalen Speicher nutzbar. */ }
}

function loadOrientationPracticeState() {
  try {
    const saved = JSON.parse(localStorage.getItem(ORIENTATION_PRACTICE_STORAGE_KEY) || "null");
    if (!saved) return;
    const completed = Array.isArray(saved.completed)
      ? [...new Set(saved.completed.filter(index => Number.isInteger(index) && index >= 0 && index < orientationPracticeLevels.length))]
      : [];
    orientationPracticeState = {
      level: Number.isInteger(saved.level) && saved.level >= 0 && saved.level < orientationPracticeLevels.length ? saved.level : 0,
      completed,
      round: Number.isInteger(saved.round) && saved.round >= 0 ? saved.round : 0,
      plotSelection: null
    };
  } catch { /* Ungültige gespeicherte Daten werden ignoriert. */ }
}

function renderOrientationPracticeMap() {
  document.querySelector("#orientation-exercise-map").innerHTML = orientationPracticeMapMarkup();
  document.querySelector("#orientation-map-key").innerHTML = orientationPracticeKeyMarkup();
}

function setOrientationPracticeFeedback(type, title, message) {
  const feedback = document.querySelector("#orientation-feedback");
  feedback.className = `orientation-feedback ${type}`;
  feedback.innerHTML = `<strong>${title}</strong>${message}`;
  feedback.hidden = false;
}

function renderOrientationPractice() {
  const level = orientationPracticeLevels[orientationPracticeState.level];
  const complete = orientationPracticeState.completed.includes(orientationPracticeState.level);
  document.querySelector("#orientation-exercise-number").textContent = `Stufe ${String(orientationPracticeState.level + 1).padStart(2, "0")}`;
  document.querySelector("#orientation-exercise-difficulty").textContent = level.difficulty;
  document.querySelector("#orientation-exercise-title").textContent = level.title;
  document.querySelector("#orientation-exercise-instruction").textContent = level.instruction;
  document.querySelector("#orientation-task").innerHTML = orientationPracticeTaskMarkup();

  document.querySelectorAll("[data-orientation-level]").forEach((button, index) => {
    const selected = index === orientationPracticeState.level;
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
    button.classList.toggle("is-complete", orientationPracticeState.completed.includes(index));
  });
  document.querySelector("#orientation-exercise-panel").setAttribute("aria-labelledby", `orientation-level-${orientationPracticeState.level}`);

  const completedCount = orientationPracticeState.completed.length;
  document.querySelector("#orientation-progress-count").textContent = `${completedCount} von ${orientationPracticeLevels.length}`;
  document.querySelector("#orientation-progress-bar").style.width = `${completedCount / orientationPracticeLevels.length * 100}%`;

  const feedback = document.querySelector("#orientation-feedback");
  feedback.hidden = true;
  feedback.className = "orientation-feedback";
  const next = document.querySelector("#orientation-next");
  next.hidden = !complete;
  next.textContent = completedCount === orientationPracticeLevels.length ? "Neue Runde starten ↻" : "Nächste Stufe →";
  if (complete) {
    setOrientationPracticeFeedback("correct", "Bereits gelöst.", "Du kannst die Aufgabe erneut bearbeiten oder zur nächsten offenen Stufe wechseln.");
  }

  orientationPracticeState.plotSelection = null;
  renderOrientationPracticeMap();
}

function normalizedPracticeDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function practiceDecimalValue(value) {
  const number = Number(String(value || "").trim().replace(",", "."));
  return Number.isFinite(number) ? number : null;
}

function orientationPracticeAnswer() {
  const level = orientationPracticeLevels[orientationPracticeState.level];
  const variant = orientationPracticeVariant();
  if (level.id === "order") {
    const selected = document.querySelector("input[name='orientation-order']:checked")?.value;
    if (!selected) return { valid: false, message: "Wähle zuerst eine Reihenfolge aus." };
    return {
      valid: true,
      correct: selected === "east-north",
      success: "Erst wird der Ostwert an der senkrechten Linie gelesen, danach der Nordwert an der waagerechten Linie.",
      hint: "Nutze den Merksatz: „Ran an den Baum, rauf auf den Baum.“"
    };
  }
  if (level.id === "square" || level.id === "precision") {
    const easting = normalizedPracticeDigits(document.querySelector("#orientation-easting")?.value);
    const northing = normalizedPracticeDigits(document.querySelector("#orientation-northing")?.value);
    const expectedEasting = level.id === "square"
      ? String(variant.easting)
      : `${variant.baseEasting}${variant.eastingDigit}`;
    const expectedNorthing = level.id === "square"
      ? String(variant.northing)
      : `${variant.baseNorthing}${variant.northingDigit}`;
    if (!easting || !northing) return { valid: false, message: "Trage Ostwert und Nordwert vollständig ein." };
    return {
      valid: true,
      correct: easting === expectedEasting && northing === expectedNorthing,
      success: `Die vollständige Übungsangabe lautet 32U MA ${expectedEasting} ${expectedNorthing}.`,
      hint: level.id === "square"
        ? "Lies die senkrechte Linie links vom roten Feld und danach die waagerechte Linie darunter."
        : "Nimm zuerst den zweistelligen Grundwert und ergänze dann die jeweilige 100-m-Teilung."
    };
  }
  if (level.id === "plot") {
    const selection = orientationPracticeState.plotSelection;
    if (!selection) return { valid: false, message: "Wähle in beiden Feldern eine Teilung oder tippe ein Feld im Raster an." };
    return {
      valid: true,
      correct: selection.eastingDigit === variant.eastingDigit && selection.northingDigit === variant.northingDigit,
      success: `Richtig gesetzt: ${variant.eastingDigit} Schritte nach rechts und ${variant.northingDigit} Schritte nach oben innerhalb des 1-km-Feldes.`,
      hint: `Lies den Ziffernanteil getrennt: Ostteilung ${variant.eastingDigit}, danach Nordteilung ${variant.northingDigit}.`
    };
  }

  const ground = practiceDecimalValue(document.querySelector("#orientation-route-km")?.value);
  const map = practiceDecimalValue(document.querySelector("#orientation-route-cm")?.value);
  if (ground === null || map === null) return { valid: false, message: "Trage beide Streckenwerte ein." };
  return {
    valid: true,
    correct: Math.abs(ground - variant.groundKilometers) < 0.01 && Math.abs(map - variant.mapCentimeters) < 0.01,
    success: `Die Route ist ${variant.groundKilometers} km lang. Im Maßstab 1 : ${variant.scale.toLocaleString("de-DE")} entspricht das ${variant.mapCentimeters} cm auf der Karte.`,
    hint: `Addiere zuerst ${variant.eastKilometers} km waagerecht und ${variant.northKilometers} km senkrecht. Rechne danach mit dem angegebenen Maßstab um.`
  };
}

function checkOrientationPracticeAnswer() {
  const result = orientationPracticeAnswer();
  if (!result.valid) {
    setOrientationPracticeFeedback("wrong", "Noch unvollständig.", result.message);
    return;
  }
  if (!result.correct) {
    setOrientationPracticeFeedback("wrong", "Noch nicht richtig.", result.hint);
    return;
  }

  if (!orientationPracticeState.completed.includes(orientationPracticeState.level)) {
    orientationPracticeState.completed.push(orientationPracticeState.level);
    orientationPracticeState.completed.sort((a, b) => a - b);
  }
  saveOrientationPracticeState();
  setOrientationPracticeFeedback("correct", "Richtig.", result.success);
  const completedCount = orientationPracticeState.completed.length;
  document.querySelector("#orientation-progress-count").textContent = `${completedCount} von ${orientationPracticeLevels.length}`;
  document.querySelector("#orientation-progress-bar").style.width = `${completedCount / orientationPracticeLevels.length * 100}%`;
  document.querySelectorAll("[data-orientation-level]").forEach((button, index) => {
    button.classList.toggle("is-complete", orientationPracticeState.completed.includes(index));
  });
  const next = document.querySelector("#orientation-next");
  next.hidden = false;
  next.textContent = completedCount === orientationPracticeLevels.length ? "Neue Runde starten ↻" : "Nächste Stufe →";
}

function startNewOrientationPracticeRound() {
  orientationPracticeState = {
    level: 0,
    completed: [],
    round: (orientationPracticeState.round + 1) % 3000,
    plotSelection: null
  };
  saveOrientationPracticeState();
  renderOrientationPractice();
}

function advanceOrientationPractice() {
  if (orientationPracticeState.completed.length === orientationPracticeLevels.length) {
    startNewOrientationPracticeRound();
    return;
  }
  const levelCount = orientationPracticeLevels.length;
  for (let offset = 1; offset <= levelCount; offset += 1) {
    const candidate = (orientationPracticeState.level + offset) % levelCount;
    if (!orientationPracticeState.completed.includes(candidate)) {
      orientationPracticeState.level = candidate;
      orientationPracticeState.plotSelection = null;
      saveOrientationPracticeState();
      renderOrientationPractice();
      return;
    }
  }
}

function updateOrientationPlotSelection(eastingDigit, northingDigit) {
  if (orientationPracticeLevels[orientationPracticeState.level].id !== "plot") return;
  if (!Number.isInteger(eastingDigit) || !Number.isInteger(northingDigit)) {
    orientationPracticeState.plotSelection = null;
  } else {
    orientationPracticeState.plotSelection = { eastingDigit, northingDigit };
  }
  const eastingSelect = document.querySelector("#orientation-plot-easting");
  const northingSelect = document.querySelector("#orientation-plot-northing");
  if (eastingSelect) eastingSelect.value = Number.isInteger(eastingDigit) ? String(eastingDigit) : "";
  if (northingSelect) northingSelect.value = Number.isInteger(northingDigit) ? String(northingDigit) : "";
  renderOrientationPracticeMap();
}

function installOrientationPractice() {
  const trainer = document.querySelector("#orientation-trainer");
  if (!trainer) return;
  loadOrientationPracticeState();

  document.querySelectorAll("[data-orientation-level]").forEach(button => {
    button.addEventListener("click", () => {
      orientationPracticeState.level = Number(button.dataset.orientationLevel);
      orientationPracticeState.plotSelection = null;
      saveOrientationPracticeState();
      renderOrientationPractice();
    });
    button.addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      orientationPracticeState.level = (orientationPracticeState.level + direction + orientationPracticeLevels.length) % orientationPracticeLevels.length;
      orientationPracticeState.plotSelection = null;
      saveOrientationPracticeState();
      renderOrientationPractice();
      document.querySelector(`[data-orientation-level='${orientationPracticeState.level}']`)?.focus();
    });
  });

  document.querySelector("#orientation-check").addEventListener("click", checkOrientationPracticeAnswer);
  document.querySelector("#orientation-next").addEventListener("click", advanceOrientationPractice);
  document.querySelector("#orientation-practice-reset").addEventListener("click", startNewOrientationPracticeRound);

  document.querySelector("#orientation-task").addEventListener("change", event => {
    if (!["orientation-plot-easting", "orientation-plot-northing"].includes(event.target.id)) return;
    const eastingValue = document.querySelector("#orientation-plot-easting")?.value;
    const northingValue = document.querySelector("#orientation-plot-northing")?.value;
    updateOrientationPlotSelection(
      eastingValue === "" ? null : Number(eastingValue),
      northingValue === "" ? null : Number(northingValue)
    );
  });
  document.querySelector("#orientation-task").addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    checkOrientationPracticeAnswer();
  });

  document.querySelector("#orientation-exercise-map").addEventListener("click", event => {
    const svg = event.target.closest("svg[data-practice-map='plot']");
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const viewX = (event.clientX - rect.left) / rect.width * 440;
    const viewY = (event.clientY - rect.top) / rect.height * 440;
    const left = 70;
    const top = 45;
    const size = 320;
    const cell = 32;
    if (viewX < left || viewX > left + size || viewY < top || viewY > top + size) return;
    const eastingDigit = Math.min(9, Math.max(0, Math.floor((viewX - left) / cell)));
    const northingDigit = Math.min(9, Math.max(0, 9 - Math.floor((viewY - top) / cell)));
    updateOrientationPlotSelection(eastingDigit, northingDigit);
  });

  renderOrientationPractice();
}

const pageTitles = {
  start: "Dienstbeginn",
  spiel: "Dienstbeginn-Challenge",
  waffen: "Waffenkunde · Dienstbeginn",
  schiesslehre: "Schießlehre · Dienstbeginn",
  nato: "NATO-Alphabet · Dienstbeginn",
  "nato-drill": "Alphabet-Drill · Dienstbeginn",
  dienstgrade: "Dienstgrade · Dienstbeginn",
  "dienstgrad-drill": "Dienstgrad-Drill · Dienstbeginn",
  truppengattungen: "Truppengattungen · Dienstbeginn",
  organisation: "Bundeswehr-Struktur · Dienstbeginn",
  groesseneinteilung: "Größeneinteilungen · Dienstbeginn",
  teilstreitkraefte: "Teilstreitkräfte der Bundeswehr · Dienstbeginn",
  knoten: "Knoten & Bunde · Dienstbeginn",
  krawatte: "Krawatte binden · Dienstbeginn",
  geschichte: "Geschichte · Dienstbeginn",
  "geschichte-nationalflagge": "Nationalflagge & Nationalfarben · Geschichte · Dienstbeginn",
  liedersammlung: "Liedersammlung · Dienstbeginn",
  "liedersammlung-westerwaldlied": "Westerwaldlied · Liedersammlung · Dienstbeginn",
  nummern: "Wichtige Nummern · Dienstbeginn",
  packlisten: "Verpackungsplan · Dienstbeginn",
  "packlisten-bettenbau": "Bettenbau · Dienstbeginn",
  "packlisten-rucksack": "Rucksack · Dienstbeginn",
  abkuerzungen: "Abkürzungen · Dienstbeginn",
  erscheinungsbild: "Äußeres Erscheinungsbild · Dienstbeginn",
  formaldienst: "Formaldienst · Dienstbeginn",
  "formaldienst-befehle": "Befehle & Meldungen · Dienstbeginn",
  orientierung: "Orientieren im Gelände · Dienstbeginn",
  "orientierung-kartenkunde": "Kartenkunde & UTM · Dienstbeginn",
  "orientierung-uebungen": "Orientierungsübungen · Dienstbeginn",
  pflichten: "Rechte und Pflichten · Dienstbeginn",
  "pflichten-sg": "Pflichten · Rechte und Pflichten · Dienstbeginn",
  "artilleriebataillon-215": "Artilleriebataillon 215 · Dienstbeginn",
  "artillerie": "Artillerie · Dienstbeginn",
  "militaerische-ordnung": "Militärische Ordnung · Dienstbeginn",
  "militaerische-ordnung-soziale-medien": "Soziale Medien · Militärische Ordnung · Dienstbeginn",
  "militaerische-ordnung-krankmeldungen": "Krankmeldungen · Militärische Ordnung · Dienstbeginn",
  meldungen: "Meldungen · Dienstbeginn",
  "meldungen-zusatzinfos": "DTG & Zusatzinfos · Dienstbeginn"
};

let pendingSearchTarget = null;
let pendingSearchFocus = false;
let activeSearchHit = null;
let resetAbbreviationSearch = null;

function compactSearchText(value) {
  return String(value || "").replace(/←\s*Übersicht/g, "").replace(/\s+/g, " ").trim();
}

function normalizeSearch(value) {
  return compactSearchText(value)
    .toLocaleLowerCase("de-DE")
    .normalize("NFD")
    .replace(/\u00ad/g, "")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss");
}

function escapeSearchHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
}

function containsSearchTerm(text, term) {
  if (term.length > 3) return text.includes(term);
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-z0-9])${escaped}($|[^a-z0-9])`, "i").test(text);
}

function searchTargetFor(element, section) {
  const abbreviationGrid = element.closest(".abbreviation-grid");
  if (abbreviationGrid) {
    let target = element;
    while (target.parentElement && target.parentElement !== abbreviationGrid) target = target.parentElement;
    return target;
  }
  return element.closest("article, details, li, figure, .alphabet-card, .rank-card, .branch-card, .organization-card, .knot-card, .contact-card") || element.closest("section") || section;
}

function searchTitleForTarget(target, fallback) {
  const abbreviation = target.parentElement?.classList.contains("abbreviation-grid") ? target.querySelector("dt") : null;
  if (abbreviation) {
    const meaning = compactSearchText(target.querySelector("dd strong")?.textContent || "");
    return meaning ? `${compactSearchText(abbreviation.textContent)} · ${meaning}` : compactSearchText(abbreviation.textContent);
  }

  const heading = target.querySelector("h2, h3, h4, dt, .rank-copy strong, .branch-copy strong, .contact-copy strong, figcaption strong, strong");
  return compactSearchText(heading?.textContent || fallback);
}

function buildSearchIndex() {
  const ignoredPages = new Set(["start", "spiel"]);
  const selector = "h1, h2, h3, h4, p, dt, dd, li, figcaption, code, .rank-copy, .supplemental-rank-card, .branch-copy, .contact-copy, .contact-number";
  const entries = [];

  [...document.querySelectorAll(".page[data-page]")]
    .filter(section => !ignoredPages.has(section.dataset.page))
    .forEach(section => {
      const page = section.dataset.page;
      const title = compactSearchText(section.querySelector(".subcategory-heading h2")?.textContent || section.querySelector("h1")?.textContent || pageTitles[page] || page);
      const intro = compactSearchText(section.querySelector(".page-intro p")?.textContent || "");
      const targets = new Map();

      entries.push({
        page,
        title,
        label: compactSearchText(section.querySelector(".page-intro .kicker")?.textContent || "Themenbereich"),
        intro,
        targetId: section.querySelector("h1")?.id || "",
        normalizedKey: normalizeSearch(title),
        normalizedTitle: normalizeSearch(title),
        normalizedText: normalizeSearch(`${title} ${intro}`),
        isPage: true
      });

      [...section.querySelectorAll(selector)].forEach((element, index) => {
        if (element.closest("[data-search-ignore]")) return;
        const target = searchTargetFor(element, section);
        if (target === section) return;
        const text = compactSearchText(target.textContent);
        if (text.length < 2 || targets.has(target)) return;
        if (!target.id) target.id = `search-${page}-${index}`;
        targets.set(target, { targetId: target.id, text });
      });

      targets.forEach((item, target) => {
        const itemTitle = searchTitleForTarget(target, title);
        const abbreviation = target.parentElement?.classList.contains("abbreviation-grid") ? compactSearchText(target.querySelector("dt")?.textContent || "") : "";
        entries.push({
          page,
          title: itemTitle,
          label: abbreviation ? `Abkürzung · ${title}` : title,
          intro: item.text,
          targetId: item.targetId,
          normalizedKey: normalizeSearch(abbreviation || itemTitle),
          normalizedTitle: normalizeSearch(itemTitle),
          normalizedText: normalizeSearch(`${itemTitle} ${item.text}`),
          isPage: false
        });
      });
    });

  return entries;
}

function searchSnippet(text) {
  const clean = compactSearchText(text);
  return clean.length > 170 ? `${clean.slice(0, 167).trimEnd()}…` : clean;
}

function focusSiteSearch() {
  const input = document.querySelector("#site-search-input");
  const search = document.querySelector(".site-search");
  if (!input || !search) return;
  search.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  window.setTimeout(() => input.focus({ preventScroll: true }), 120);
}

function revealSearchTarget(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  if (target.closest(".abbreviation-grid")) resetAbbreviationSearch?.();

  let details = target.closest("details");
  while (details) {
    details.open = true;
    details = details.parentElement?.closest("details") || null;
  }

  if (activeSearchHit) activeSearchHit.classList.remove("search-hit");
  activeSearchHit = target;
  target.classList.add("search-hit");
  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
  target.focus({ preventScroll: true });
  window.setTimeout(() => {
    target.classList.remove("search-hit");
    if (activeSearchHit === target) activeSearchHit = null;
  }, 2500);
}

function installAbbreviationSearch() {
  const form = document.querySelector("#abbreviation-search-form");
  const input = document.querySelector("#abbreviation-search-input");
  const clear = document.querySelector("#abbreviation-search-clear");
  const status = document.querySelector("#abbreviation-search-status");
  const empty = document.querySelector("#abbreviation-search-empty");
  const cards = [...document.querySelectorAll(".abbreviation-grid > div")].map(card => ({
    card,
    abbreviation: compactSearchText(card.querySelector("dt")?.textContent || ""),
    normalized: normalizeSearch(card.querySelector("dt")?.textContent || "")
  }));
  if (!form || !input || !clear || !status || !empty || !cards.length) return;

  const applyFilter = () => {
    const query = compactSearchText(input.value);
    const normalizedQuery = normalizeSearch(query);
    let visible = 0;

    cards.forEach(item => {
      const match = !normalizedQuery || item.normalized.includes(normalizedQuery);
      item.card.hidden = !match;
      if (match) visible += 1;
    });

    clear.hidden = !query;
    empty.hidden = !query || visible > 0;
    status.textContent = !query
      ? `${cards.length} Abkürzungen`
      : visible === 1
        ? "1 Abkürzung gefunden"
        : `${visible} Abkürzungen gefunden`;
  };

  resetAbbreviationSearch = (focus = false) => {
    input.value = "";
    applyFilter();
    if (focus) input.focus();
  };

  input.addEventListener("input", applyFilter);
  input.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    resetAbbreviationSearch(true);
  });
  clear.addEventListener("click", () => resetAbbreviationSearch(true));
  form.addEventListener("submit", event => {
    event.preventDefault();
    applyFilter();
  });
  applyFilter();
}

function installSearch() {
  const form = document.querySelector("#site-search-form");
  const input = document.querySelector("#site-search-input");
  const clear = document.querySelector("#site-search-clear");
  const results = document.querySelector("#site-search-results");
  const status = document.querySelector("#site-search-status");
  const openSearch = document.querySelector("#open-search");
  const searchIndex = buildSearchIndex();
  let currentMatches = [];

  const closeResults = () => {
    currentMatches = [];
    results.innerHTML = "";
    results.hidden = true;
    status.textContent = "";
  };

  const renderResults = () => {
    const query = compactSearchText(input.value);
    const normalizedQuery = normalizeSearch(query);
    clear.hidden = !query;

    if (!query) {
      closeResults();
      return;
    }

    if (normalizedQuery.length < 2) {
      currentMatches = [];
      results.hidden = false;
      results.innerHTML = '<p class="site-search-empty">Bitte mindestens zwei Zeichen eingeben.</p>';
      status.textContent = "Suchbegriff zu kurz";
      return;
    }

    const terms = normalizedQuery.split(" ").filter(Boolean);
    currentMatches = searchIndex
      .filter(item => terms.every(term => containsSearchTerm(item.normalizedText, term)))
      .map(item => {
        const titleMatches = terms.every(term => containsSearchTerm(item.normalizedTitle, term));
        const exactTitle = item.normalizedTitle === normalizedQuery;
        const exactKey = item.normalizedKey === normalizedQuery;
        const keyStartsWithQuery = item.normalizedKey.startsWith(normalizedQuery);
        return {
          ...item,
          snippet: searchSnippet(item.intro),
          score: exactKey ? 220 : exactTitle ? 190 : keyStartsWithQuery ? 150 : titleMatches ? 110 : item.isPage ? 40 : 70
        };
      })
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "de"))
      .slice(0, 12);

    results.hidden = false;

    if (!currentMatches.length) {
      results.innerHTML = `<p class="site-search-empty">Kein Treffer für „${escapeSearchHtml(query)}“. Versuche einen kürzeren oder allgemeineren Begriff.</p>`;
      status.textContent = `Keine Treffer für ${query}`;
      return;
    }

    results.innerHTML = currentMatches.map(match => `
      <a class="search-result" href="#${match.page}" role="listitem" data-search-page="${match.page}" data-search-target="${escapeSearchHtml(match.targetId)}">
        <span class="search-result-copy">
          <span>${escapeSearchHtml(match.label)}</span>
          <strong>${escapeSearchHtml(match.title)}</strong>
          <small>${escapeSearchHtml(match.snippet)}</small>
        </span>
        <span class="search-result-arrow" aria-hidden="true">→</span>
      </a>`).join("");
    status.textContent = `${currentMatches.length} Treffer für ${query}`;
  };

  input.addEventListener("input", renderResults);
  input.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    input.value = "";
    clear.hidden = true;
    closeResults();
  });
  clear.addEventListener("click", () => {
    input.value = "";
    clear.hidden = true;
    closeResults();
    input.focus();
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!currentMatches.length) {
      renderResults();
      return;
    }
    results.querySelector(".search-result")?.click();
  });
  results.addEventListener("click", event => {
    const link = event.target.closest(".search-result");
    if (!link) return;
    pendingSearchTarget = { page: link.dataset.searchPage, targetId: link.dataset.searchTarget };
  });
  openSearch.addEventListener("click", () => {
    if (pageFromHash() === "start") {
      focusSiteSearch();
      return;
    }
    pendingSearchFocus = true;
    window.location.hash = "start";
  });
}

function renderMilitaryOrderConfig() {
  const config = window.militaryOrderConfig;
  if (!config) return;
  const dateLabel = value => new Intl.DateTimeFormat("de-DE").format(new Date(value + "T12:00:00"));
  document.querySelectorAll("[data-order-phone]").forEach(link => {
    const isEmergency = link.dataset.orderPhone === "emergency";
    const number = isEmergency ? config.emergencyPhone : config.readinessPhone;
    link.href = "tel:" + number;
    link.textContent = isEmergency ? number : config.readinessLabel;
  });
  if (config.localTimesConfirmed && config.wakeTime && config.quietTime) {
    document.querySelector("[data-order-times]").textContent = "Örtliche Zeiten in " + config.location + ": Wecken um " + config.wakeTime + " Uhr; Nachtruhe ab " + config.quietTime + " Uhr. Aktuelle Befehle haben Vorrang.";
  }
  document.querySelector("[data-order-clothing]").textContent = config.medicalClothingConfirmed
    ? "Örtliche Bekleidungsvorgabe in " + config.location + ": " + config.medicalClothing + ". Nicht auf andere Standorte übertragbar."
    : "Für den beschriebenen Ablauf in " + config.location + " ist " + config.medicalClothing + " vorgesehen. Die aktuelle Gültigkeit ist örtlich zu bestätigen; vor dem Arztbesuch die befohlene Bekleidung klären.";
  if (config.medicalReviewDate && config.medicalReviewedBy) {
    document.querySelector("[data-order-reviewer]").textContent = "Fachlich geprüft durch: " + config.medicalReviewedBy;
  }
  document.querySelector("[data-order-source-date]").textContent = dateLabel(config.sourcesCheckedOn);
  if (config.socialReviewDate && config.socialReviewedBy) {
    document.querySelector("[data-social-reviewer]").textContent = "Fachlich geprüft durch: " + config.socialReviewedBy;
  }
  const sourceList = document.querySelector("[data-social-sources]");
  sourceList.replaceChildren(...(config.socialSources || []).map(source => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = source.url;
    link.textContent = source.label;
    link.target = "_blank";
    link.rel = "noreferrer";
    item.append(link);
    return item;
  }));
}

function updateTopicNumbers() {
  const cards = document.querySelectorAll(".category-grid > a");
  cards.forEach((card, index) => {
    const number = String(index + 1);
    const cardNumber = card.querySelector(".category-index b");
    if (cardNumber) cardNumber.textContent = number;
    const section = document.querySelector(`[data-page="${card.hash.slice(1)}"]`);
    const pageNumber = section?.querySelector(".page-intro > .numbered-kicker b");
    if (pageNumber) pageNumber.textContent = number;
    document.querySelectorAll(`[data-parent-page="${card.hash.slice(1)}"] .page-intro > .numbered-kicker b`).forEach(badge => { badge.textContent = number; });
  });
}

let activePage = null;
let activeKnotId = null;
let overviewScrollTop = 0;
let knotOverviewScrollTop = 0;
let scrollRestoreFrame = 0;

function pageFromHash() {
  const requested = window.location.hash.replace(/^#/, "").split("/")[0] || "start";
  if (requested === "musterspind") return "packlisten";
  if (requested === "marschlied") return "liedersammlung-westerwaldlied";
  if (requested === "liedersammlung-nationalhymne") return "liedersammlung";
  return Object.hasOwn(pageTitles, requested) ? requested : "start";
}

function knotFromHash() {
  if (pageFromHash() !== "knoten") return null;
  const requested = window.location.hash.replace(/^#/, "").split("/")[1] || "";
  return knots.some(knot => knot.id === requested) ? requested : null;
}

function rememberPageScroll() {
  // Ignore scroll events caused by hiding a page or traversing browser history.
  if (activePage === "start" && pageFromHash() === "start" && !scrollRestoreFrame) {
    overviewScrollTop = window.scrollY;
  }
  if (activePage === "knoten" && pageFromHash() === "knoten" && !knotFromHash() && !scrollRestoreFrame) {
    knotOverviewScrollTop = window.scrollY;
  }
}

function route() {
  const page = pageFromHash();
  const knotId = knotFromHash();
  if (page === activePage && knotId === activeKnotId) return;

  window.cancelAnimationFrame(scrollRestoreFrame);
  const previousPage = activePage;
  const previousKnotId = activeKnotId;
  const searchTarget = pendingSearchTarget?.page === page ? pendingSearchTarget : null;
  const shouldFocusSearch = pendingSearchFocus && page === "start";
  if (searchTarget) pendingSearchTarget = null;
  if (shouldFocusSearch) pendingSearchFocus = false;
  activePage = page;
  activeKnotId = knotId;
  document.querySelectorAll("[data-page]").forEach(section => section.classList.toggle("active", section.dataset.page === page));

  const knotOverview = document.querySelector("#knot-overview");
  const knotLesson = document.querySelector("#knot-lesson");
  document.querySelector('[data-page="knoten"]').classList.toggle("knot-detail-view", page === "knoten" && Boolean(knotId));
  if (page === "knoten" && knotId) {
    const knot = knots.find(item => item.id === knotId);
    renderKnotLesson(knot);
    knotOverview.hidden = true;
    knotLesson.hidden = false;
    document.title = `${knot.name} · Dienstbeginn`;
  } else {
    knotOverview.hidden = false;
    knotLesson.hidden = true;
    document.title = pageTitles[page];
  }

  // Restore after the overview is visible and native hash navigation has finished.
  scrollRestoreFrame = window.requestAnimationFrame(() => {
    const returnToKnotOverview = page === "knoten" && !knotId && previousPage === "knoten" && previousKnotId;
    const top = page === "start" ? overviewScrollTop : returnToKnotOverview ? knotOverviewScrollTop : 0;
    window.scrollTo({ top, behavior: "instant" });
    scrollRestoreFrame = 0;
    if (searchTarget?.targetId) window.requestAnimationFrame(() => revealSearchTarget(searchTarget.targetId));
    if (shouldFocusSearch) window.requestAnimationFrame(focusSiteSearch);
  });
}

function installNavigation() {
  if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
  // Capture the exact position before a category link changes the URL.
  document.addEventListener("click", rememberPageScroll, true);
  window.addEventListener("scroll", rememberPageScroll, { passive: true });
  window.addEventListener("hashchange", route);
  route();
}


function installOathBanner() {
  const banner = document.querySelector(".oath-banner");
  const button = banner?.querySelector(".oath-toggle");
  if (!button) return;
  button.addEventListener("click", () => {
    const paused = banner.dataset.paused !== "true";
    banner.dataset.paused = String(paused);
    button.setAttribute("aria-pressed", String(paused));
    button.setAttribute("aria-label", paused ? "Lauftext fortsetzen" : "Lauftext pausieren");
    button.firstElementChild.textContent = paused ? "▶" : "Ⅱ";
  });
}

function installWelcomeBanner() {
  const banner = document.querySelector("#welcome-banner");
  const open = document.querySelector("#open-welcome");
  let hideTimer;
  const hide = () => {
    window.clearTimeout(hideTimer);
    banner.classList.remove("is-visible");
    banner.hidden = true;
    banner.setAttribute("aria-hidden", "true");
  };
  const show = () => {
    window.clearTimeout(hideTimer);
    banner.hidden = false;
    banner.setAttribute("aria-hidden", "false");
    banner.classList.remove("is-visible");
    void banner.offsetWidth;
    banner.classList.add("is-visible");
    hideTimer = window.setTimeout(hide, 2050);
  };

  open.addEventListener("click", show);
  show();
}

function installOfflineMode() {
  const status = document.querySelector("#offline-status");
  const setStatus = (message, state = "ready") => {
    status.lastChild.textContent = ` ${message}`;
    status.dataset.state = state;
  };

  const updateConnectionStatus = () => {
    if (!navigator.onLine) setStatus("Offline · gespeicherte Inhalte verfügbar", "offline");
  };

  window.addEventListener("online", () => setStatus("Online · Offline-Speicher wird aktualisiert", "syncing"));
  window.addEventListener("offline", updateConnectionStatus);

  if (!("serviceWorker" in navigator)) {
    setStatus("Offline-Modus wird von diesem Browser nicht unterstützt", "unavailable");
    return;
  }

  navigator.serviceWorker.addEventListener("message", event => {
    if (event.data?.type !== "REMOTE_MEDIA_CACHED") return;
    const suffix = event.data.failed ? ` · ${event.data.failed} Bilder nur online` : "";
    setStatus(`Offline bereit · ${event.data.cached} Bilder gespeichert${suffix}`, event.data.failed ? "partial" : "ready");
  });

  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" });
      // An online visit explicitly checks for the latest offline content.
      if (navigator.onLine) await registration.update();
      await navigator.serviceWorker.ready;
      if (!navigator.onLine) {
        updateConnectionStatus();
        return;
      }

      setStatus("Kerninhalte offline bereit · Bilder werden gespeichert", "syncing");
      const remoteImages = [...document.querySelectorAll("img[data-image]")]
        .map(image => image.currentSrc || image.src)
        .filter(src => ["commons.wikimedia.org", "www.bundeswehr.de"].includes(new URL(src).hostname));
      (registration.active || navigator.serviceWorker.controller)?.postMessage({ type: "CACHE_REMOTE_MEDIA", urls: [...new Set(remoteImages)] });
    } catch {
      setStatus("Offline-Modus konnte nicht vorbereitet werden", "unavailable");
    }
  });
}

renderWeapons();
renderAlphabet();
renderRanks();
renderBranches();
renderOrganizations();
renderKnots();
renderContacts();
installImageFallbacks();
installRankFilters();
installRankLearningGame();
installNatoLearningGame();
renderMilitaryOrderConfig();
updateTopicNumbers();
installQuiz();
installOrientationPractice();
installSearch();
installAbbreviationSearch();
installOathBanner();
installWelcomeBanner();
installOfflineMode();
installNavigation();

(() => {
  const dialog = document.querySelector("#packing-lightbox");
  if (!dialog) return;
  const viewport = dialog.querySelector(".packing-lightbox-scroll");
  const picture = viewport.querySelector("img");
  const minus = dialog.querySelector("[data-packing-minus]");
  const plus = dialog.querySelector("[data-packing-plus]");
  let zoom = 100, opener = null;
  const update = () => {
    picture.style.width = Math.round(viewport.clientWidth * zoom / 100) + "px";
    dialog.querySelector("output").textContent = zoom + " %";
    minus.disabled = zoom <= 100; plus.disabled = zoom >= 400;
  };
  document.querySelectorAll("[data-packing-image]").forEach(link => link.addEventListener("click", event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); opener = link;
    const original = link.querySelector("img");
    picture.src = link.href; picture.alt = original.alt;
    picture.width = original.width; picture.height = original.height;
    dialog.querySelector("h2").textContent = link.closest("figure").querySelector("figcaption").textContent;
    zoom = 100; dialog.showModal(); update(); viewport.scrollTo(0, 0);
    dialog.querySelector("[data-packing-close]").focus();
  }));
  dialog.querySelector("[data-packing-close]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => { if (opener?.isConnected) opener.focus({preventScroll:true}); });
  minus.addEventListener("click", () => { zoom = Math.max(100, zoom - 50); update(); });
  plus.addEventListener("click", () => { zoom = Math.min(400, zoom + 50); update(); });
  dialog.querySelector("[data-packing-fit]").addEventListener("click", () => { zoom = 100; update(); viewport.scrollTo(0,0); });
  window.addEventListener("resize", () => { if (dialog.open) update(); });
  window.addEventListener("hashchange", () => { if (dialog.open) dialog.close(); });
})();
