const SideBarIcon = ({icon}) => {
    return(
        <div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto 
                        bg-gray-700 hover:bg-amber-500 hover:text-gray-900
                        text-amber-400 hover:rounded-xl rounded-3xl
                        transition-all duration-300 ease-linear cursor-pointer
                        shadow-lg group">
            {icon}
        
        </div>
    );
}

export default SideBarIcon;