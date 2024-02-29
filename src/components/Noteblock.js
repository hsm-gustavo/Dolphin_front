const Noteblock = ({title}) => {
    return(
        <div className="h-44 bg-yellow-500 rounded-lg shadow-md shadow-blue-500/50">
            <div id="title">
                <p className="text-xl">{title}</p>
                <div className="bg-red-600 h-3 w-10 rounded-xl"/>
                <p>Aberto há xx horas</p>
            </div>
        </div>
    );
}

export default Noteblock;