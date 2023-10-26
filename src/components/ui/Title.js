const Title = ({ children, customClassName, customColor, customAttr }) => {
    return (
        <h2
            className={`font-bold text-xl 
                        ${customColor ? '' : 'text-slate-900 dark:text-slate-200'}
                        ${customClassName}`}
        >
            {children}
        </h2>
    );
};


export default Title;