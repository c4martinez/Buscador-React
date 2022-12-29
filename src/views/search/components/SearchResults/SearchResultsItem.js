export default function SearchResultsItem({ name, email, phone, username }) {
    return (
        <div style={{ backgroundColor: "rgb(179, 219, 179)", margin: "1rem", padding: "10px", width: "100%" }}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{username}</p>
        </div>
    );
}