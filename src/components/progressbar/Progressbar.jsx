import ProgressWrapper from "./Progressbar.style";

const Progressbar = ({ done, ...props }) => {
    return (
        <ProgressWrapper {...props}>
            <div className="progress-done" style={{ width: `5.6%` }}>
                {/* <p>{done}%</p> */}
            </div>
        </ProgressWrapper>
    );
}

export default Progressbar;