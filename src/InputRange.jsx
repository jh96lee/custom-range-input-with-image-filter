import * as React from "react";

import "./input-range.css";

const InputRange = ({
	imageFilterObject,
	setImageFilterObject,
	cssProperty,
	minValue,
	maxValue,
}) => {
	const [rangeValue, setRangeValue] = React.useState(0);

	const handleInputRangeOnMouseUp = (e) => {
		const objectToProvideToSetState = { ...imageFilterObject };

		const cssValueObject = {};

		const cssValueUnit = cssProperty === "blur" ? "px" : "%";

		cssValueObject[
			e.target.dataset.cssProperty
		] = `${e.target.value}${cssValueUnit}`;

		objectToProvideToSetState[cssProperty] = cssValueObject;

		setImageFilterObject(objectToProvideToSetState);
	};

	const spanWidthCalculation = () => {
		let currentPositionValue = rangeValue - minValue;

		const percentage = (currentPositionValue / (maxValue - minValue)) * 100;

		return `${percentage}%`;
	};

	return (
		<div className="input-range">
			{/* TODO: we want the span to be absolute positioned to the div */}
			<span
				style={{
					display: "inline-block",
					position: "absolute",
					top: 0,
					left: 0,
					// TODO: We want the span to be right behind the range input
					zIndex: "2",
					// TODO: the width of the span will fill up the left side of the dragger
					width: spanWidthCalculation(),
					// REVIEW: we want to make sure that the height fits within the div
					height: "2.6rem",
					backgroundColor: "cornflowerblue",
					borderTopLeftRadius: "0.3rem",
					borderBottomLeftRadius: "0.3rem",
				}}
			/>

			{/* TODO: we want the input to be positioned at the top of all elements */}
			<input
				data-css-property={cssProperty}
				type="range"
				min={minValue}
				max={maxValue}
				value={rangeValue}
				step={1}
				onChange={(e) => setRangeValue(e.target.value)}
				onMouseUp={handleInputRangeOnMouseUp}
			/>
		</div>
	);
};

export default InputRange;
