type Data = {
    name: string,
    age: number,
    isStudent: boolean
}


const MainProps = ({ name, age, isStudent }: Data) => {
    console.log(name, age, isStudent);
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
};

export default MainProps;
