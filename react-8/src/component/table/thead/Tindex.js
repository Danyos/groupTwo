function Tindex({bar,confVal}) {

    return (
        <thead>
            <tr>
                {
                    bar && bar.map((res, i) => (
                        <th key={i}>{res}</th>

                    ))
                }
                {
                    confVal.find(res=>res===true)?(
                        <th>Configuration</th>
                    ):''
                }

            </tr>
        </thead>

    );
}

export default Tindex;
