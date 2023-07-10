import Table from "../component/table/Table";

function Home() {
    return (
        <>
            <Table url={'https://jsonplaceholder.typicode.com/users'}
               config={{
                   edit:true,
                   read:true,
                   delete:true,
               }}
            />

        </>
    );
}

export default Home;
