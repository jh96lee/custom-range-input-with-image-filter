import * as React from "react";

import InputRange from "./InputRange";

import imageTemplate from "./sunsetorrisewhatever.jpg";

import "./App.css";

function App() {
	const [imageFilterObject, setImageFilterObject] = React.useState({});

	const buildImageStyleObject = () => {
		const styleObjectsArray = Object.values(imageFilterObject);

		const cssValueStringsArray = styleObjectsArray.map((element) => {
			let elementKey = Object.keys(element)[0];

			let elementValue = element[elementKey];

			let cssValueString = `${elementKey}(${elementValue})`;

			return cssValueString;
		});

		const fullCSSValueString = cssValueStringsArray.join(" ");

		console.log(fullCSSValueString);

		return {
			filter: fullCSSValueString,
		};
	};

	return (
		<div className="app">
			<img
				src={imageTemplate}
				style={buildImageStyleObject()}
				alt={"image-template"}
			/>

			<InputRange
				imageFilterObject={imageFilterObject}
				setImageFilterObject={setImageFilterObject}
				cssProperty={"brightness"}
				minValue={-50}
				maxValue={50}
			/>

			<InputRange
				imageFilterObject={imageFilterObject}
				setImageFilterObject={setImageFilterObject}
				cssProperty={"blur"}
				minValue={-10}
				maxValue={10}
			/>

			<InputRange
				imageFilterObject={imageFilterObject}
				setImageFilterObject={setImageFilterObject}
				cssProperty={"contrast"}
				minValue={-50}
				maxValue={50}
			/>
		</div>
	);
}

export default App;
