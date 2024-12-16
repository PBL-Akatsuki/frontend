import "../css/LearningCard.css";

function LearningCard() {
  return (
    <div className="learning-card">
      <h2 className="card-title">Module 1: Basics of Machine Learning</h2>

      <div className="card-content">
        {/* Left Panel */}
        <div className="left-panel">
          <h3 className="story-title">
            Alex and the Magic Plant: Learning Machine Learning
          </h3>

          <h4 className="story-subheading">The Challenge</h4>
          <p>
            Alex loves gardening and has discovered a magical plant. The plant
            grows differently based on how much sunlight and water it gets.
            However, Alex faces a big challenge:{" "}
            <b>there are too many combinations to test manually</b>!
            <br />
            To solve this, Alex decides to learn about <b>Machine Learning</b>—a
            way to teach computers to analyze data and make predictions.
          </p>

          <h4 className="story-subheading">What is Machine Learning?</h4>
          <p>
            Machine Learning (ML) is a method that helps computers identify{" "}
            <b>patterns</b> in data and make decisions{" "}
            <b>without being explicitly programmed</b>.
          </p>
          <p>
            <b>Example:</b> Instead of manually testing every combination of
            sunlight and water, Alex collects data, uses ML to identify
            patterns, and predicts the best conditions for the plant to grow.
          </p>

          <h4 className="story-subheading">Alex’s Machine Learning Journey</h4>
          <ol>
            <li>
              <b>Step 1: Data Collection</b>
              <p>Alex records data from experiments with the magical plant:</p>
              <ul>
                <li>Sunlight (hours per day)</li>
                <li>Water (liters per day)</li>
                <li>Growth (plant height in cm)</li>
              </ul>
            </li>
            <li>
              <b>Step 2: Identifying Features</b>
              <p>Features are the inputs that influence growth:</p>
              <ul>
                <li>
                  <b>Sunlight</b>: How many hours the plant gets.
                </li>
                <li>
                  <b>Water</b>: How much water it receives.
                </li>
              </ul>
            </li>
            <li>
              <b>Step 3: Defining Labels</b>
              <p>
                The label is the outcome Alex wants to predict:
                <b>Plant height (Growth in cm).</b>
              </p>
            </li>
            <li>
              <b>Step 4: Training the Model</b>
              <p>Alex trains the model using past data to find patterns:</p>
              <ul>
                <li>4 hours of sunlight + 2 liters of water → 30 cm tall</li>
                <li>8 hours of sunlight + 4 liters of water → 70 cm tall</li>
              </ul>
            </li>
            <li>
              <b>Step 5: Making Predictions</b>
              <p>Alex uses the model to predict growth for new conditions:</p>
              <ul>
                <li>6 hours of sunlight + 3 liters of water → 50 cm tall</li>
              </ul>
            </li>
          </ol>

          <h4 className="story-subheading">Let’s Explore Data!</h4>
          <p>
            On the right, you see a scatter plot. Each dot represents one of
            Alex’s experiments. The axes show features like sunlight, water, and
            plant growth.
          </p>
          <p>
            <b>Your Task:</b> Use the interactive controls to explore
            relationships in the data:
            <ul>
              <li>
                <b>X-axis:</b> Sunlight or Water
              </li>
              <li>
                <b>Y-axis:</b> Growth
              </li>
            </ul>
          </p>
          <p>Apply filters to focus on specific data:</p>
          <ul>
            <li>
              Show experiments with <b>sunlight &gt; 6 hours</b>.
            </li>
            <li>
              Highlight experiments with <b>water &gt; 3 liters</b>.
            </li>
            <li>
              Filter experiments where the plant grew <b>taller than 50 cm</b>.
            </li>
          </ul>
          <p>Look for patterns in the scatter plot:</p>
          <ul>
            <li>
              <b>Clusters:</b> Similar outcomes (e.g., plants that grew tall).
            </li>
            <li>
              <b>Trends:</b> More sunlight and water often lead to taller
              plants.
            </li>
            <li>
              <b>Outliers:</b> Unexpected results.
            </li>
          </ul>

          <h4 className="story-subheading">The Final Challenge</h4>
          <p>
            Can you help Alex identify the best conditions for the magical plant
            to grow the tallest?
          </p>
          <p>
            <b>Instructions:</b>
            <ul>
              <li>
                Use the scatter plot controls to adjust the axes and filters.
              </li>
              <li>
                Identify the combination of sunlight and water that resulted in
                the tallest plants.
              </li>
              <li>
                Click <b>'Submit'</b> to check your answer and receive feedback!
              </li>
            </ul>
          </p>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <h4 className="visualization-title">Interactive Visualization</h4>
          <p>
            Explore the scatter plot and help Alex find patterns in the data:
          </p>
          <ul>
            <li>
              <b>Scatter Plot:</b> Use dropdowns to adjust the <b>X-axis</b> and{" "}
              <b>Y-axis</b>.
            </li>
            <li>
              <b>Filters:</b> Apply filters to focus on:
              <ul>
                <li>Sunlight &gt; 6 hours</li>
                <li>Water &gt; 3 liters</li>
                <li>Growth &gt; 50 cm</li>
              </ul>
            </li>
            <li>
              <b>Real-Time Feedback:</b> The scatter plot updates dynamically as
              you interact.
            </li>
          </ul>

          <p>Look for clusters and trends to find the answer!</p>
        </div>
      </div>
    </div>
  );
}

export default LearningCard;