import "./about.scss";
import miafair from "../../assets/images/miafair.jpg";

export default function About() {
    return (
        <div className="about" id="about" name="about">
            <div className="about__desc">
                <h2 className="about__desc--title">I'm Mia,</h2>
                <h2 className="about__desc--title">Nice to meet you.</h2>
                <div className="about__image left">
                    <img
                        src={miafair}
                        alt="About"
                        className="about__image--img"
                    />
                </div>
                <p className="about__desc--text">
                    I come from a multi-generational creative family, from
                    fashion designers to paint artists, dancers, singers,
                    tailors, and writers. So, you can say that being creative
                    runs through my veins. I learned at a young age to express
                    myself using the arts. Fashion and dance were the two
                    choices of passion that I decided to pursue. At a young age,
                    I loved having an idea in my head, sketching it out,
                    developing the concept into a product, and seeing someone
                    wear it was the ultimate high for me regarding fashion. For
                    dance, the same rules apply, but instead of creating
                    something that people could wear, I was able to create
                    something people could feel through movement. In pursuing
                    fashion, I decided to get my degree in product Development
                    at Fashion Institute of Design &amp; Merchandising. While
                    pursuing my degree, I became intrigued with questions
                    surrounding the word "Why," such as, "Why do people wear
                    what they wear?" and "Why do people behave the way they
                    do?". These questions of why behind the behavior I could not
                    shake compelled me into action, and I decided to continue my
                    education and get a BA degree in Psychology and Fashion
                    Merchandising at TCU. After receiving my degree, I intend to
                    pursue my MA in Psychology; however, life happened, and I
                    did not pursue a Master's in Psychology.
                </p>
                <div className="about__image right">
                    <img
                        src={miafair}
                        alt="About"
                        className="about__image--img"
                    />
                </div>
                <br></br>
                <p className="about__desc--text">
                    In 2018, life afforded me a detour, resulting in landing an
                    Office Manager position at Projekt202, a software
                    development consulting agency in Dallas, Texas. Working at
                    p202 was monumental because I was introduced to the UX world
                    here. Seeing how problems were addressed and solutions were
                    developed was enlightening. I realized that I could use
                    Psychology and Fashion in terms of creativity to create
                    products that can positively impact others' lives.
                </p>
                <p className="about__desc--text">
                    Fast forward to 2020, a big year for the entire world, but
                    for me, this was the year that I decided to change direction
                    and pursue UX/UI design. I enrolled in the Springboard
                    Bootcamp, and here I am today.
                </p>
                <p className="about__desc--text bottom">
                    <b>Goals:</b>
                    <br></br>I pride myself on my desire to help others. To
                    create a product that positively impacts people's lives. In
                    a world where it is profits over people, I want to be able
                    to change that mindset by putting people first. As a
                    designer, I stand on the foundation of impactful,
                    purposeful, and functional design.
                </p>
                <div className="about__desc--content">
                    <div className="about__desc--content--text">
                        <b>Fun Facts About Me</b>
                        <ul className="about__desc--list">
                            <li>
                                I love (American) Football. I grew up around
                                sports with three older brothers; football
                                became my fourth brother.
                            </li>
                            <li>
                                Dance is my boo thang. I danced for over 11
                                years. Being a dance student at The legendary
                                Debbie Allen Dance Academy was one of the
                                highlights of my life.
                            </li>
                            <li>
                                Watching HGTV is such a pleasure for me.
                                Watching the rehabilitation process of old homes
                                and seeing them become beautiful art pieces is
                                incredible to me.
                            </li>
                            <li>
                                Actively learning HTML &amp; CSS. I love to
                                learn, and I aspire to learn as much as possible
                                to help me become a well-rounded designer.
                            </li>
                            <li>
                                I am a newly found health nut. I believe it is
                                vitally important to take care of your body.
                            </li>
                        </ul>
                    </div>
                    <div className="about__desc--content--image right">
                        <img
                            src={miafair}
                            alt="About"
                            className="about__desc--content--image--img"
                        />
                    </div>
                </div>
                <div className="about__desc--content about__desc--content--reverse">
                    <div className="about__desc--content--image">
                        <img
                            src={miafair}
                            alt="About"
                            className="about__desc--content--image--img"
                        />
                    </div>
                    <div className="about__desc--content--text right">
                        <b>Likes &amp; Hobbies:</b>
                        <ul className="about__desc--list">
                            <li>Working out</li>
                            <li>Painting</li>
                            <li>Dance</li>
                            <li>Tennis</li>
                            <li>Aspire to have a garden</li>
                            <li>Reading articles on BioHacking</li>
                            <li>Going to the Farmers Market</li>
                            <li>Spending time with family and loved ones</li>
                            <li>Watching TV &amp; Movies:</li>
                            <ul>
                                <li>College Football &amp; NFL</li>
                                <li>HGTV</li>
                                <li>Documentaries on the earth and wildlife</li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
