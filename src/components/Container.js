export const Container = ({children}) => {
    return (
        <div className="to-do">
            <h1>TODO React Application</h1>
            <div>
                {children}
            </div>
        </div>
    );
}