import PropTypes from 'prop-types'

const ColorOption = ({selectedColor, handleColor}) => {
    return (
        <div className=" space-y-4  ">
            <div className="flex gap-2 justify-center">
                <h4 className="text-2xl ">Pick a color:</h4>
                <select id="sel" value={selectedColor} onChange={handleColor} className="text-xl border-2 border-sky-800">
                    <option value="black">Black</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                </select>
            </div>            
        </div>
    );
};
ColorOption.propTypes = {
    selectedColor: PropTypes.string.isRequired,
    handleColor: PropTypes.func.isRequired
}
export default ColorOption;