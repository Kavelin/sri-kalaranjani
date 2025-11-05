import "./about.css";

export default function About() {
  return (
    <div className="page">
      <section id="main-section">
        <div>
          <h1>DR. J. SRINIBABU</h1>
          <div style={{ whiteSpace: "pre-wrap", lineHeight: 1.5 }}>
            DATE OF BIRTH: 14.09.1967
            {"\n"}
            LANGUAGES Known: TELUGU, TAMIL AND ENGLISH
            {"\n"}
            MY GURU: MASTER SRI Pedagandham Satyanarayana Garu of Kala
            Tharangini, Kakinada, A.P.
            {"\n"}
            MUSICAL INSTRUMENT: Veena (learned from Sri V.V. Raman)
            {"\n"}
            AREA OF EXPERTISE: Devotional music; singer; music composer;
            teacher; poet; keyboard player; Mridangam, Tabla and Ghatam player
          </div>
        </div>
        <img src="/media/srinibabu.jpg" />
      </section>

      <section>
        <img src="/media/vanijayram.jpg" />
        <div style={{ textAlign: "left" }}>
          <h1>Performances</h1>
          <p>
            Vocal concert at Arasakesari Sivan Temple, Singapore (2004). Vocal
            and instrumental concerts in various places in India. Authored and
            composed several devotional music albums sung by eminent film
            singers such as Dr. S.P. Balasubrahmanyam, Vani Jayaram, Unni
            Krishnan, Mano, Shailaja, and Mrs. Shanthi Suresh.
          </p>
        </div>
      </section>

      <section>
        <div>
          <h3 style={{ fontSize: 18, marginBottom: 8 }}>
            Foundations & Institutions
          </h3>
          <ul>
            <li>Kalaranjani Classical Devotional and Cine Orchestra — 2004</li>
            <li>Kalaranjani School of Music, Chennai — 2006</li>
            <li>Kalaranjani Devotional Music Centre — 2006</li>
            <li>Kalaranjani Charitable Trust — 2006</li>
          </ul>
        </div>

        <img src="/media/youtubebanner.jpg" />
      </section>

      <section>
        <img src="/media/happybirthday.jpg" />
        <div>
          <h3 style={{ fontSize: 18, marginBottom: 8 }}>Media & YouTube</h3>
          <p>
            Programmes telecast on Vendhar TV and Sri Sankara TV. <br /> YouTube
            channel:&nbsp;
            <a href="https://www.youtube.com/@srikalaranjanischoolofmusi9057">
              Sri Kalaranjani School of Music
            </a><br />
            200+ videos uploaded and 1000+ subscribers currently.
          </p>
        </div>
      </section>

      <section>
        <div>
          <h3 style={{ fontSize: 18, marginBottom: 8 }}>
            Notable Projects & Events
          </h3>
          <ol>
            <li>
              Amirthavarshini Raga Tharangini — 12 hours non-stop programme
              (telecast on Sri Sankara TV)
            </li>
            <li>Nathatharangini programme (Sri Sankara TV)</li>
            <li>
              Padma Vibhushan Dr. M.S. Subbulakshmi's 107th birthday function
              with 107 artists
            </li>
            <li>
              Padma Vibhushan Dr. M. Balamuralikrishna's 95th birthday
              celebration — 120 artists participated
            </li>
            <li>
              Sri Lalitha Sahasranamam composed with 21 ragas, performed by 1000
              artists on 22.6.25
            </li>
          </ol>
        </div>
        <img src="/media/lalithasahasthranaamam.jpg" />
      </section>

      <section>
        <h2>
          Sri Kalaranjani School of Music has been blessed by participation of
          eminent artists such as Dr. Mangalampalli Balamuralikrishna Garu, Sri
          Kadri Gopalakrishnan, Sri Mandolin U. Srinivas and Mrs. Anuradha
          Sriram, and Mrs. Shanthi Suresh. Dr. J. Srinibabu has more than 24
          years of experience in the music field in Chennai.
        </h2>
      </section>
    </div>
  );
}
