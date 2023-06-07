import React from "react";
import { Link } from "react-router-dom";
import TranslationRow from "./translationRow";

import "./css/translationPage.css";

import translators from "../../images/translationPage/translators.png";
import work_domains from "../../images/translationPage/work_domains.png";
import certifications from "../../images/translationPage/certifications.png";
import colaborations from "../../images/translationPage/colaborations.png";

const TranslationPage = ({ screenWidth }) => {
  return (
    <div className="my-4 translation-mainDiv">
      <p className="text-center translation-subtitle">Traduceri</p>
      <p className="text-center translation-paragraph">
        Centrul nostru oferă servicii de calitate nu doar în domeniul cursurilor
        de pregătire și învățare a limbilor străine, ci și în cel al{" "}
        <b>traducerilor autorizate</b>. Grija pentru transpunerea cât mai fidelă
        și adecvată a cuvintelor dintr-o limbă în alta reprezintă atuul care
        denotă profesionalismul cu care traducătorii noștri tratează documentele
        primite.
      </p>
      <p className="text-center translation-subtitle mx-0 my-4">
        De ce să apelați la noi pentru traduceri?
      </p>
      <TranslationRow
        side="normal"
        image={translators}
        content={
          <div className="col-lg-6 pos-c-cc p-4">
            <p className="text-center translationPage-header">
              Număr substanțial de limbi străine și traducători disponibil
              pentru traduceri
            </p>
            <p className="text-center translationPage-text m-0 p-0">
              Centrul ERAN se dedică domeniului traducerilor încă din 2006,
              însumând 14 ani de experiență în domeniu și peste 600.000 de
              pagini traduse. Până în prezent, centrul nostru a încheiat
              contracte de colaborare cu peste <b>90 de traducători</b> din țară
              pentru a vă oferi o paletă largă de limbi străine din și în care
              să fie operate traducerile dumneavoastră. Printre limbile vizate
              menționăm engleza, franceza, spaniola, araba, greaca, turca,
              suedeza etc., numărul acestora atingând pragul de <b>28</b>.
            </p>
          </div>
        }
      />
      <TranslationRow
        side={screenWidth < 992 ? "normal" : "reverse"}
        image={work_domains}
        content={
          <div className="col-lg-6 pos-c-cc p-4">
            <p className="text-center translationPage-header">
              Domenii de traducere la scară largă
            </p>
            <p className="text-center translationPage-text m-0 p-0">
              Pentru a fi siguri de faptul că putem oferi servicii de calitate
              pentru fiecare client, centrul nostru și-a extins aria de
              specializări pentru efectuarea traducerilor în domeniile{" "}
              <b>
                juridic, economic, aviatic – general și elicoptere, medical,
                vamal, legislativ, standardizare, etică și conformitate,
                controlul exporturilor, certificări
              </b>{" "}
              etc.
            </p>
          </div>
        }
      />
      <TranslationRow
        side="normal"
        image={certifications}
        content={
          <div className="col-lg-6 pos-c-cc p-4">
            <p className="text-center translationPage-header">Certificări</p>
            <p className="text-center translationPage-text m-0 p-0">
              Centrul nostru a obținut o serie de <b>certificări</b> importante,
              întregul proces de traducere desfășurându-se în conformitate cu
              acestea:
            </p>
            <ul className="translation-Ul my-3">
              <li>SR EN ISO 14001:2015</li>
              <li>SR EN ISO 9001:2015</li>
              <li>SR ISO 17100:2015</li>
              <li>NATO AQAP 2131</li>
            </ul>
          </div>
        }
      />
      <TranslationRow
        side={screenWidth < 992 ? "normal" : "reverse"}
        image={colaborations}
        content={
          <div className="col-lg-6 pos-c-cc p-4">
            <p className="text-center translationPage-header">
              Parteneriate și colaborări cu instituții locale importante
            </p>
            <p className="text-center translationPage-text m-0 p-0">
              Centrul nostru a încheiat parteneriate și colaborări pe domeniul
              traducerilor de documente cu o serie importante de{" "}
              <b>
                instituții publice locale, companii multinaționale, firme
                private și persoane fizice
              </b>{" "}
              care au devenit clienți fideli, apelând în exclusivitate la
              serviciile noastre de traduceri cu cea mai mare încredere.
            </p>
          </div>
        }
      />
      <p className="text-center my-4 translationPage-text">
        Pentru a primi o ofertă, te rugăm să ne contactezi accesând pagina de{" "}
        <Link to="/contact" className="translationPage-link">
          Contact
        </Link>
      </p>
    </div>
  );
};

export default TranslationPage;
