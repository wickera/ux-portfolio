import { Link } from "react-router-dom";
import "./work.scss";

// Header Photos
import CityPupsLanding from "./projects/CityPups/images/Newcpheader.png";
import MindEvolutionHeader from "./projects/MindEvolution/images/NewCSHeaderimage.png";
import NextLevelFitnessHeader from "./projects/NextLevelFitness/images/NextLevelFitnessHeaderimage1.png";
import RiffsFinancialCoachHeader from "./projects/RiffsFinancialCoach/images/Riffnewheader.png";

export default function Work() {
    return (
        <div className="work" id="work" name="work">
            <Link to="/work/mind_evolution" replace className="work__link">
                <div className="work__project">
                    <img
                        src={MindEvolutionHeader}
                        className="work__project--img"
                        alt="Project"
                    />
                    <div className="work__project--desc">
                        <h3 className="work__project--title">Mind Evolution</h3>
                        <h4 className="work__project--subtitle">
                            UI/UX Mobile App
                        </h4>
                        <p>
                            Empowering you to take control of your mental
                            health.
                        </p>
                    </div>
                </div>
            </Link>
            <Link to="/work/city_pups" replace className="work__link">
                <div className="work__project">
                    <img
                        src={CityPupsLanding}
                        className="work__project--img"
                        alt="Project"
                    />
                    <div className="work__project--desc">
                        <h3 className="work__project--title">CityPups</h3>
                        <h4 className="work__project--subtitle">
                            Modified GV Design Sprint
                        </h4>
                        <p>
                            Helping people living in large cities find the
                            perfect dog to adopt.
                        </p>
                    </div>
                </div>
            </Link>
            <Link to="/work/next_level_fitness" replace className="work__link">
                <div className="work__project">
                    <img
                        src={NextLevelFitnessHeader}
                        className="work__project--img"
                        alt="Project"
                    />
                    <div className="work__project--desc">
                        <h3 className="work__project--title">
                            Next Level Fitness
                        </h3>
                        <h4 className="work__project--subtitle">
                            UI/UX Fitness Tracking Mobile App
                        </h4>
                        <p>
                            Take your fitness to the next level with a virtual
                            assistant who will keep you accountable so you can
                            reach your goal.
                        </p>
                    </div>
                </div>
            </Link>
            <Link
                to="/work/riffs_financial_coach"
                replace
                className="work__link"
            >
                <div className="work__project">
                    <img
                        src={RiffsFinancialCoachHeader}
                        className="work__project--img"
                        alt="Project"
                    />
                    <div className="work__project--desc">
                        <h3 className="work__project--title">
                            Riff's Financial Coach
                        </h3>
                        <h4 className="work__project--subtitle">
                            UX Design Website Dashboard
                        </h4>
                        <p>
                            As an artist, you can learn how to take your music
                            full-time by better managing your finances.
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
