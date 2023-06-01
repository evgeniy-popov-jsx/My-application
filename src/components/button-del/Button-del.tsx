export const ButtonDel: React.FC = () => {
    return (
        <div className="btn del">
            <span className="button__text">Deleted</span>
            <span className="button__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className="svg">
                    <line y2="12" y1="12" x2="19" x1="5"></line>
                </svg>
            </span>
        </div>
    )
}