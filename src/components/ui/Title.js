const Title = ({ children, customClassName }) => {
    return (
        <h2 className={`font-bold text-foreground text-[15px] ${customClassName}`}>
            {children}
        </h2>
    );
};


export default Title;