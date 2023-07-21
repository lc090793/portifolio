"use client";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";
import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehanceSquare,
  faGithubSquare,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
function cv() {
  return (
    <ReactLenis root>
      <div className="cv">
        <div className="cv__container">
          <Reveal
            delay=".1"
            component={
              <div className="headline">

                <div className="head_left">CREATIVE DEVELOPER PASSION AND <strong>EXPERIENCE.</strong></div>

                <div className="head_right"><Button text="download cv"/></div>
              </div>
            }
          />

          <div className="cv_content">
            <div className="left">
              <Reveal delay=".2" component={<div className="user"></div>} />
              <Reveal delay=".3" component={<h5>Leonardo costa</h5>} />
              <Reveal
                delay=".4"
                component={
                  <p>
                    User interface designer with a wealth of experience and a
                    great passion in building new products and improving
                    customer relationship during the design on New York - United
                    States.
                  </p>
                }
              />
              <Reveal
                delay=".5"
                component={
                  <div className="user_info">
                    <div>PROFESSION</div>
                    <div>UI DESIGNER</div>
                  </div>
                }
              />

              <Reveal
                delay=".6"
                component={
                  <div className="user_info">
                    <div>DATE OF BIRTH</div>
                    <div>11 NOVEMBER 1985</div>
                  </div>
                }
              />

              <Reveal
                delay=".7"
                component={
                  <div className="user_info">
                    <div>EDUCATION</div>
                    <div>HIGHER EDUCATION</div>
                  </div>
                }
              />
              <div className="social_icons">
                <Reveal
                  delay=".1"
                  component={<FontAwesomeIcon icon={faBehanceSquare} />}
                />
                <Reveal
                  delay=".2"
                  component={<FontAwesomeIcon icon={faGithubSquare} />}
                />
                <Reveal
                  delay=".3"
                  component={<FontAwesomeIcon icon={faLinkedinIn} />}
                />
                <Reveal
                  delay=".4"
                  component={<FontAwesomeIcon icon={faInstagram} />}
                />
                <Reveal
                  delay=".5"
                  component={<FontAwesomeIcon icon={faYoutube} />}
                />
                <Reveal
                  delay=".6"
                  component={<FontAwesomeIcon icon={faDribbble} />}
                />
              </div>
              <Reveal
                delay=".1"
                component={
                  <div className="user_info">
                    <div>portuguese</div>
                    <div>native</div>
                  </div>
                }
              />
              <Reveal
                delay=".2"
                component={
                  <div className="user_info">
                    <div>english</div>
                    <div>b2 level</div>
                  </div>
                }
              />
            </div>
            <div className="right">
              <Reveal
                delay=".3"
                component={
                  <div className="cv_headline_default">EXPERIENCE</div>
                }
              />

              <Reveal
                delay=".4"
                component={
                  <div className="experience_content">
                    <div className="title_and_date">
                      <div className="title">Horizon Value Expert</div>
                      <div className="date">2021 — PRESENT</div>
                    </div>
                    <div className="description">
                      Creating wireframe projects for innovative applications.
                      Improving customer relations and creating recruitment
                      campaigns for new positions. Working with a
                      well-coordinated team as remote work.
                    </div>
                  </div>
                }
              />
              <Reveal
                delay=".5"
                component={
                  <div className="experience_content">
                    <div className="title_and_date">
                      <div className="title">Puento — Visual Concept</div>
                      <div className="date">2021 — PRESENT</div>
                    </div>
                    <div className="description">
                      Creating wireframe projects for innovative applications.
                      Improving customer relations and creating recruitment
                      campaigns for new positions. Working with a
                      well-coordinated team as remote work.
                    </div>
                  </div>
                }
              />

              <div className="education_category">
                <div className="left">
                  <Reveal
                    delay=".6"
                    component={
                      <div className="cv_headline_default">EDUCATION</div>
                    }
                  />

                  <Reveal
                    delay=".7"
                    component={
                      <div className="experience_content">
                        <div className="title_and_date">
                          <div className="title">Puento — Visual Concept</div>
                          <div className="date">2021 — PRESENT</div>
                        </div>
                        <div className="description">
                          Creating wireframe projects for innovative
                          applications. Improving customer relations and
                          creating recruitment campaigns for new positions.
                          Working with a well-coordinated team as remote work.
                        </div>
                      </div>
                    }
                  />
                  <Reveal
                    delay=".8"
                    component={
                      <div className="experience_content">
                        <div className="title_and_date">
                          <div className="title">Puento — Visual Concept</div>
                          <div className="date">2021 — PRESENT</div>
                        </div>
                        <div className="description">
                          Creating wireframe projects for innovative
                          applications. Improving customer relations and
                          creating recruitment campaigns for new positions.
                          Working with a well-coordinated team as remote work.
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className="right">
                  <Reveal
                    delay=".9"
                    component={
                      <div className="cv_headline_default">AWARDS</div>
                    }
                  />

                  <Reveal
                    delay="1"
                    component={
                      <div className="experience_content">
                        <div className="title_and_date">
                          <div className="title">Puento — Visual Concept</div>
                          <div className="date">2021 — PRESENT</div>
                        </div>
                        <div className="description">
                          Creating wireframe projects for innovative
                          applications. Improving customer relations and
                          creating recruitment campaigns for new positions.
                          Working with a well-coordinated team as remote work.
                        </div>
                      </div>
                    }
                  />
                  <Reveal
                    delay=".1"
                    component={
                      <div className="experience_content">
                        <div className="title_and_date">
                          <div className="title">Puento — Visual Concept</div>
                          <div className="date">2021 — PRESENT</div>
                        </div>
                        <div className="description">
                          Creating wireframe projects for innovative
                          applications. Improving customer relations and
                          creating recruitment campaigns for new positions.
                          Working with a well-coordinated team as remote work.
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>

              <div className="education_category">
                <div className="left">
                  <Reveal
                    delay=".6"
                    component={
                      <div className="cv_headline_default">SKILLS</div>
                    }
                  />
                  <Reveal
                    delay=".7"
                    component={
                      <div className="experience_content">
                        <div className="title_and_date">
                          <div className="title">Puento — Visual Concept</div>
                          <div className="date">2021 — PRESENT</div>
                        </div>
                        <div className="description">
                          Creating wireframe projects for innovative
                          applications. Improving customer relations and
                          creating recruitment campaigns for new positions.
                          Working with a well-coordinated team as remote work.
                        </div>
                      </div>
                    }
                  />
                  <Reveal
                    delay=".8"
                    component={
                      <div className="experience_content">
                        <div className="title_and_date">
                          <div className="title">Puento — Visual Concept</div>
                          <div className="date">2021 — PRESENT</div>
                        </div>
                        <div className="description">
                          Creating wireframe projects for innovative
                          applications. Improving customer relations and
                          creating recruitment campaigns for new positions.
                          Working with a well-coordinated team as remote work.
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className="right">
                  <Reveal
                    delay=".9"
                    component={<div className="cv_headline_default">HOBBY</div>}
                  />

                  <Reveal
                    delay="1"
                    component={
                      <div className="experience_content">
                        <div className="title_and_date">
                          <div className="title">Puento — Visual Concept</div>
                          <div className="date">2021 — PRESENT</div>
                        </div>
                        <div className="description">
                          Creating wireframe projects for innovative
                          applications. Improving customer relations and
                          creating recruitment campaigns for new positions.
                          Working with a well-coordinated team as remote work.
                        </div>
                      </div>
                    }
                  />
                  <Reveal
                    delay=".1"
                    component={
                      <div className="experience_content">
                        <div className="title_and_date">
                          <div className="title">Puento — Visual Concept</div>
                          <div className="date">2021 — PRESENT</div>
                        </div>
                        <div className="description">
                          Creating wireframe projects for innovative
                          applications. Improving customer relations and
                          creating recruitment campaigns for new positions.
                          Working with a well-coordinated team as remote work.
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

export default cv;
