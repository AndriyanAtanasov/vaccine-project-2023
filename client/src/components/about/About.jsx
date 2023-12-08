const About = () => {
  return (
    <div className="coronata">
      <div className="cases">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_center ">
                <h2>WHO WE ARE</h2>
                <p>
                  Оur goal is to create a community for people who are
                  vaccinated and want to share
                </p>
              </div>
            </div>
          </div>
          <div className="row d_flex">
            <div className=" col-md-4">
              <div className="latest text_align_center">
                <figure>
                  <img src="images/cases1.png" alt="#" />
                </figure>
                <div className="nostrud">
                  <h3>What is a vaccine?</h3>
                  <p>
                    Vaccines differ from other medical drugs in two important
                    ways. The first is that they are designed to prevent
                    disease, rather than treat it. They do this by priming a
                    person’s immune system to recognise a specific
                    disease-causing bacteria, virus or other pathogen. This
                    “memory” can last years, or in some cases for life, which is
                    why vaccination can be so effective, stopping people from
                    getting sick rather than waiting until disease occurs. The
                    second is that vaccines by their nature tend to be
                    biological products, rather than chemical like most drugs.
                    This not only means that the processes involved in making
                    them are usually more complex and expensive, but also that
                    they tend to be less stable than chemicals and more
                    vulnerable to temperature changes. Because of this, vaccines
                    normally need to be refrigerated to keep them within a
                    specific temperature range. The type of vaccine will
                    determine how low a temperature the vaccine needs to be
                    stored at. Most vaccines need to be kept refrigerated or
                    frozen, but intranasal vaccines are now being developed that
                    can be stored at room temperature.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className="latest text_align_center">
                <figure>
                  <img src="images/cases2.png" alt="#" />
                </figure>
                <div className="nostrud">
                  <h3>Why should I get vaccinated?</h3>
                  <p>
                    Vaccines protect us from serious diseases and some can also
                    help contain the spread of disease, saving around 2-3
                    million lives every year. Many of us receive these vaccines,
                    for diseases such as measles, meningitis and pneumonia, as
                    routine childhood immunisations. This has led to these
                    diseases becoming less common, or even eliminated, in areas
                    with high levels of vaccination. Some diseases have the
                    potential to be eradicated, as smallpox was in 1980. But
                    because most can exist in animals or in the environment (for
                    example in the soil), they pose an ever-present threat,
                    which is why it is so important that vaccination coverage
                    remain high. Whenever vaccination levels drop, either
                    because of hesitancy or when services are disrupted, these
                    deadly diseases can quickly rebound. The life-saving power
                    of vaccination is a major reason why global health
                    organisations like Gavi are working hard to get vaccines out
                    to low-resource areas where vaccines are either unaffordable
                    or inaccessible. Even in countries where the risk of
                    infectious disease is low, getting vaccinated is still
                    important in order to protect vulnerable people.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className="latest text_align_center">
                <figure>
                  <img src="images/cases3.png" alt="#" />
                </figure>

                <div className="nostrud">
                  <h3>How are vaccines tested?</h3>
                  <p>
                    Vaccines go through a rigorous process of testing before
                    they are used in the general population. Once researchers
                    have found a promising candidate, they put it through
                    pre-clinical studies, usually testing it on animals to
                    assess its safety and potential to prevent disease. If a
                    vaccine passes that test, it goes into phase 1 trials, where
                    it is given to a small group of people to confirm its safety
                    in humans, to see if it triggers an immune response and to
                    figure out the dosage. In phase 2 trials, the vaccine is
                    given to a larger group (usually hundreds) of volunteers to
                    see whether the immune response triggered is strong enough,
                    and whether there are any side effects. In this phase, the
                    volunteers are divided into two groups, one which gets the
                    vaccine and one which gets a placebo. In phase 3 trials, the
                    vaccine candidate is given to thousands of volunteers, again
                    divided in two groups as for phase 2 trials. During public
                    health emergencies, such as COVID-19, when no licensed
                    vaccine or treatment exists, vaccine candidates may be
                    licensed for emergency use, if they have made it to the end
                    or nearly the end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
