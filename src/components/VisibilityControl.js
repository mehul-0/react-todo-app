export const VisibilityControl = ({setShowCompleted, cleanTasks, isChecked}) => {
    

    return (
        <div className="done">
            <span>
                <input id="show"
                       type="checkbox"
                       checked={isChecked}
                       onChange={(e) => setShowCompleted(e.target.checked)}
                       style={{visibility:"hidden"}}
                       />
                <label htmlFor="show">{isChecked?"Hide":"Show"} Tasks Completed</label>
            </span>
            
        </div>
    );
};
