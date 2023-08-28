"use client";

import { useState } from "react";
import "./style.css";

export default function Stable_Diffusion() {
  const options = ["None", "Enhance", "Anime"];

  const [height, setHeight] = useState<number>(512);
  const [width, setWidth] = useState<number>(512);

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(parseInt(event.target.value));
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(parseInt(event.target.value));
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
        {/* First Part */}
        <div className="prose  svelte-1ybaih5">
          Stable Diffusion XL Online.
          <a
            href="http://stablediffusionweb.com"
            target="_blank"
            className="text-blue-500"
          >
            https://stablediffusionweb.com
          </a>
        </div>
        <div className="border p-4 rounded-md" style={{ marginTop: "-220px" }}>
          <div className="justify-between">
            <p className="text-slate-500">Prompt</p>
            <textarea
              className="w-full p-2 border rounded-md mb-2 h-24 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your prompt..."
            ></textarea>
            <p className="text-slate-500">Negative Prompt</p>
            <textarea
              className="w-full p-2 border rounded-md mb-2 h-24 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your Negative prompt..."
            ></textarea>
          </div>

          <div>
            <p className="text-slate-500">Style</p>
            <select className="w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none">
              <option>Select...</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div id="component-7" className="svelte-15lo0d8 stretch">
            <div
              className="form svelte-sfqy0y mt-8 flex justify-between"
              style={{ flexGrow: 2, minWidth: "min(320px, 100%)" }}
            >
              <div
                id="component-8"
                className="block svelte-90oupt padded border rounded-md"
                style={{
                  borderStyle: "solid",
                  overflow: "visible",
                  minWidth: "min(160px, 100%)",
                  borderWidth: "2px",
                  gap: "2px",
                  border:"2px solid black"
                }}
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
                  id="range_id_0"
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
                className="block svelte-90oupt padded"
                style={{
                  borderStyle: "solid",
                  overflow: "visible",
                  minWidth: "min(160px, 100%)",
                  borderWidth: "var(--block-border-width)",
                }}
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
        </div>

        {/* First Part */}

        {/* Second Part */}
        <div className="col-span-3">02</div>
      </div>
    </div>
  );
}
