"use client";

import { useState } from "react";
import "./style.css";

export default function Stable_Diffusion() {
  const [prompt, setPrompt] = useState("");
  const [Nprompt, setNPrompt] = useState("");
  const [height, setHeight] = useState<number>(512);
  const [width, setWidth] = useState<number>(512);
  const [guidanceScale, setGuidanceScale] = useState(1);
  const [steps, setSteps] = useState(25);
  const [seed, setSeed] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");


  const handleSeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSeed = parseInt(event.target.value);
    setSeed(newSeed);
  };

  const handleGuidanceScaleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGuidanceScale(parseInt(event.target.value));
  };

  const handleStepsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSteps(parseInt(event.target.value));
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(parseInt(event.target.value));
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(parseInt(event.target.value));
  };

  const handlePrompt = (event: any) => {
    setPrompt(event.target.value);
  };

  const handleNPrompt = (event: any) => {
    setNPrompt(event.target.value);
  };

  // Define initial state values
  const intialPrompt = "";
  const intialNPrompt = "";
  const initialHeight = 512;
  const initialWidth = 512;
  const initialGuidanceScale = 1;
  const initialSteps = 25;
  const initialSeed = 1;

  const handleClearClick = () => {
    setPrompt(intialPrompt);
    setNPrompt(intialNPrompt);
    setHeight(initialHeight);
    setWidth(initialWidth);
    setGuidanceScale(initialGuidanceScale);
    setSteps(initialSteps);
    setSeed(initialSeed);
  };

  const handleGenerateClick = async () => {
    setIsLoading(true);

    const generatedObject = {
      key: "ciH6AaDeFOaaRv9WRS86VgSvrfKJkbMZj4blir7tqaCQDtZdgfcZp4I4fwGA",
      prompt: prompt,
      negative_prompt: Nprompt,
      width: width,
      height: height,
      samples: "1",
      num_inference_steps: steps,
      safety_checker: "no",
      enhance_prompt: "yes",
      seed: seed,
      guidance_scale: guidanceScale,
      webhook: null,
      track_id: null,
    };

    try {
      const response = await fetch(
        "https://stablediffusionapi.com/api/v3/text2img",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(generatedObject),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.status === "success") {
          setIsLoading(false);
          setResult(responseData.output)
        }
        console.log("API response:", responseData);
      } else {
        console.error("API error:", response.statusText);
      }
    } catch (error) {
      console.error("API error:", error);
    }

    // console.log(generatedObject);
  };

  return (
    <div>
      <main className="flex min-h-full flex-col items-center mt-16">
        <h1 className="text-4xl font-bold">Stable Diffusion XL</h1>
        <p className="text-sm text-gray-400 mt-7 mb-7">
          Due to the large number of users, the server may experience problems.
          If you encounter an error, please try again.
        </p>
      </main>
      <div
        className="grid grid-rows-2 grid-flow-col gap-4"
        style={{ margin: "0px 80px 0px 80px" }}
      >
        {/* First Part with first section */}
        <div className="prose  svelte-1ybaih5">
          Stable Diffusion XL Online.
          <a
            href="http://stablediffusionweb.com"
            target="_blank"
            className="text-blue-500"
          >
            https://stabled.netlify.app
          </a>
        </div>
        <div style={{ marginTop: "-390px", marginBottom: "100px" }}>
          <div className="border p-4 rounded-md">
            <div className="justify-between">
              <p className="text-slate-500">Prompt</p>
              <textarea
                className="w-full p-2 border rounded-md mb-2 h-24 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your prompt..."
                onChange={handlePrompt}
                value={prompt}
              ></textarea>
              <p className="text-slate-500">Negative Prompt</p>
              <textarea
                className="w-full p-2 border rounded-md mb-2 h-24 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your Negative prompt..."
                onChange={handleNPrompt}
                value={Nprompt}
              ></textarea>
            </div>
          </div>

          {/* First Section */}
          <div id="component-7" className="svelte-15lo0d8 stretch">
            <div
              className="form svelte-sfqy0y mt-8 flex justify-between"
              style={{ flexGrow: 2, minWidth: "min(320px, 100%)" }}
            >
              <div
                id="component-8"
                className="svelte-90oupt border rounded-md p-2"
              >
                <div
                  className="wrap default full svelte-zlszon hide"
                  style={{ position: "absolute", padding: "0px" }}
                ></div>

                <div className="wrap svelte-1cl284s justify-between">
                  <div className="head svelte-1cl284s ">
                    <label htmlFor="range_id_0">
                      <span data-testid="block-info" className="svelte-1gfkn6j">
                        Height
                      </span>
                    </label>
                    <input
                      data-testid="number-input"
                      type="number"
                      min="512"
                      max="1024"
                      step="128"
                      className="svelte-1cl284s"
                      value={height}
                      onChange={handleHeightChange}
                    />
                  </div>
                </div>

                <input
                  type="range"
                  name="cowbell"
                  min="512"
                  max="1024"
                  step="128"
                  className="svelte-1cl284s"
                  value={height}
                  onChange={handleHeightChange}
                />
              </div>
              <div
                id="component-9"
                className="svelte-90oupt border rounded-md p-2"
              >
                <div
                  className="wrap default full svelte-zlszon hide"
                  style={{ position: "absolute", padding: "0px" }}
                ></div>
                <div className="wrap svelte-1cl284s">
                  <div className="head svelte-1cl284s">
                    <label htmlFor="range_id_1">
                      <span data-testid="block-info" className="svelte-1gfkn6j">
                        Width
                      </span>
                    </label>
                    <input
                      data-testid="number-input"
                      type="number"
                      min="512"
                      max="1024"
                      step="128"
                      className="svelte-1cl284s"
                      value={width}
                      onChange={handleWidthChange}
                    />
                  </div>
                </div>
                <input
                  type="range"
                  id="range_id_1"
                  name="cowbell"
                  min="512"
                  max="1024"
                  step="128"
                  className="svelte-1cl284s"
                  value={width}
                  onChange={handleWidthChange}
                />
              </div>
            </div>
          </div>
          {/* First Section */}

          {/* Second Section */}
          <div id="component-7" className="svelte-15lo0d8 stretch">
            <div
              className="form svelte-sfqy0y mt-8 flex justify-between"
              style={{ flexGrow: 2, minWidth: "min(320px, 100%)" }}
            >
              <div
                id="component-8"
                className="svelte-90oupt border rounded-md p-2"
              >
                <div
                  className="wrap default full svelte-zlszon hide"
                  style={{ position: "absolute", padding: "0px" }}
                ></div>

                <div className="wrap svelte-1cl284s justify-between">
                  <div className="head svelte-1cl284s ">
                    <label htmlFor="range_id_0">
                      <span data-testid="block-info" className="svelte-1gfkn6j">
                        Guidance Scale
                      </span>
                    </label>
                    <input
                      data-testid="number-input"
                      type="number"
                      min="1"
                      max="15"
                      step="0.25"
                      value={guidanceScale}
                      onChange={handleGuidanceScaleChange}
                      className="svelte-1cl284s"
                    />
                  </div>
                </div>

                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.25"
                  value={guidanceScale}
                  onChange={handleGuidanceScaleChange}
                  className="svelte-1cl284s"
                />
              </div>
              <div
                id="component-9"
                className="svelte-90oupt border rounded-md p-2"
              >
                <div
                  className="wrap default full svelte-zlszon hide"
                  style={{ position: "absolute", padding: "0px" }}
                ></div>
                <div className="wrap svelte-1cl284s">
                  <div className="head svelte-1cl284s">
                    <label htmlFor="range_id_1">
                      <span data-testid="block-info" className="svelte-1gfkn6j">
                        Steps
                      </span>
                    </label>
                    <input
                      data-testid="number-input"
                      type="number"
                      min="25"
                      max="100"
                      step="5"
                      value={steps}
                      onChange={handleStepsChange}
                      className="svelte-1cl284s"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min="25"
                  max="100"
                  step="5"
                  value={steps}
                  onChange={handleStepsChange}
                  className="svelte-1cl284s"
                />
              </div>
            </div>
          </div>
          {/* Second Section */}
          {/* Third Section */}
          <div id="component-7" className="svelte-15lo0d8 stretch">
            <div
              className="form svelte-sfqy0y mt-8 flex justify-between"
              style={{ flexGrow: 2, minWidth: "min(320px, 100%)" }}
            >
              <div
                id="component-8"
                className="svelte-90oupt border rounded-md p-2"
              >
                <div
                  className="wrap default full svelte-zlszon hide"
                  style={{ position: "absolute", padding: "0px" }}
                ></div>

                <div className="wrap svelte-1cl284s justify-between">
                  <div className="head svelte-1cl284s ">
                    <label htmlFor="range_id_0">
                      <span data-testid="block-info" className="svelte-1gfkn6j">
                        Seed
                      </span>
                    </label>
                    <input
                      data-testid="number-input"
                      type="number"
                      min="1"
                      max="1000000000000000000"
                      step="1"
                      className="svelte-1cl284s"
                      value={seed}
                      onChange={handleSeedChange}
                    />
                  </div>
                </div>

                <input
                  type="range"
                  min="1"
                  max="1000000000000000000"
                  step="1"
                  className="svelte-1cl284s"
                  value={seed}
                  onChange={handleSeedChange}
                />
              </div>
            </div>
          </div>
          {/* Third Section */}
          <div className="mt-10 mb-2">
            <div className="button-container">
              <button className="button" onClick={handleClearClick}>
                Clear🧹
              </button>
              <button className="button" onClick={handleGenerateClick}>
                Generate 🚀
              </button>
            </div>
          </div>
        </div>
        {/* First Part with first Section */}

        {/* Second Part */}
        <div className="col-span-3">
          <div className="flexh-screen">
            <div className="border h-auto p-8 rounded-lg shadow-md  items-center justify-center ">
              {isLoading ? (
                <>
                  <div className="loading-spinner-container">
                    <div className="loading-spinner"></div>
                  </div>
                </>
              ) : (
                <img
                  src={result}
                  alt="Image Icon"
                  className="w-32 h-full mx-auto"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
