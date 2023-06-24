import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import CircleLoader from "react-spinners/CircleLoader";
import DotLoader from "react-spinners/DotLoader";
import RingLoader from "react-spinners/RingLoader";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function ClipSpinner() {
    return (
        <ClipLoader color="#000" loading={true} css={override} size={150} />
    );
}
function RingSpinner() {
    return (
        <RingLoader color="red" loading={true} css={override} size={150} />
    );
}
function CircleSpinner() {
    return (
        <CircleLoader color="#DE354C" loading={true} css={override} size={150} />
    );
}
function DotSpinner() {
    return (
        <DotLoader color="aqua" loading={true} css={override} size={150} />
    );
}

export {
    ClipSpinner,
    CircleSpinner,
    DotSpinner,
    RingSpinner
}