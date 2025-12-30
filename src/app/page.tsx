'use client';
import Carousel from "@/components/Carousel";
export default function Home() {
  return (
    <div>
      <header className="hero" onClick={e => document.querySelector('.cta-section')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="hero-container" >
          <img src="/media/logo.gif" />
          <h1 className="hero-title hero-main-title"></h1>
          <div className="hero-down">
            <button >↓</button>
          </div>
        </div>
      </header>

      <section className="cta-section">
        <div className="hero-container">
          <h1 className="hero-title">Shri Vishnu Sahasranamam Dasa Sahasra Galarchana</h1>
          <h2 style={{color:"var(--secondary)"}}>Commencement of First Class</h2><br/>
          <Carousel directory="media/dasa-sahasragalarchana" alt="Dasa Sahasra Galarchana First Class Commencement" />

          <p>
            <br />
            Registration has opened!
            <ul>
              <li>RS.111/- FOR INDIANS </li>
              <li>$3 DOLLARS FOR ABROAD STUDENT</li>
            </ul>
            NO AGE BAR. ALL ARE WELCOME TO GET THE SHOWER OF LORD VENKATESWARA IN UNIQUE RAGAMS <br /> <br />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfsFvYiZITwHNIH9cs_snVLulrBUZiiTau4jnmR9qtQ0XUeSQ/viewform" className="hero-cta" target="_blank">
              Register Here!
            </a>
          </p>
          <p style={{fontFamily: "serif", fontSize:"large", cursor: "default", userSelect: "none"}}>
            <q><br />
              For generations, devotees have recited the sacred <b>Vishnu Sahasranamam</b> in the form of hymns. By the divine will of the Almighty, I have humbly presented the <b>Vishnu Sahasranamam</b> in a new way—through <b>Raga Malika</b> and <b>Swaras</b>—with the guidance of learned music scholars and the heartfelt participation of music lovers who revere the holy names of Lord Vishnu. <br /> <br /> I now envision bringing together <b>10,000 voices</b> to sing the
              <b> Dasa Sahasra Galarchana</b>. Out of the countless devotees of Sanatana Dharma, I seek only 10,000 to unite for this divine cause. If 100 people each inspire 10 others, we will gather 1,000; and if these 1,000 inspire 10 each, we shall reach our goal of 10,000 singers. My dream is for 10,000 people to sing together on one platform while 10 lakh devotees listen, joining their hearts in devotion. <br />
              <br />
              Though this vision is vast, I believe—with the grace of the Lord—it can surely be realized. I call upon <b>100 devoted individuals</b> to walk with me in this <b>Mahayagna</b> today: some to sing, some to listen, and some to serve. <br />
              <br /> Together, we can make this offering a reality. In this <b>Kaliyuga</b>, nothing is greater than the remembrance of the holy name of Vishnu. If we dedicate ourselves for even one year—365 days—in His remembrance, our lives will be blessed and purified. With folded hands and faith in His grace, I invite you to join me in this sacred endeavor. <br /> <br />
            </q>
          </p>

          <h1 className="hero-title">Margazhi Isai Vizha 2026!</h1>
          <Carousel directory="media/margazhi-isai-vizha" alt="Margazhi Isai Vizha 2026" />
        </div>
      </section>
    </div>
  );
}
