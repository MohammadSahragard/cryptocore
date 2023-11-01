const Subtitle = ({ children, customClassName, customColor }) => {
  return (
    <small
      className={`
                ${customColor ? customColor : 'text-slate-500 dark:text-slate-400'} 
                ${customClassName ? customClassName : undefined}`
      }
    >
      {children}
    </small>
  );
};

export default Subtitle;
