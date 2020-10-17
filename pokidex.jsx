
class Pokidex extends React.Component {
    render() {
        const { eng_name, jap_name, index, type: { primary, Secondary }, url, evolve_into } = this.props;

        return (
            <div className="card" >
                <div className="heading">
                    <h1>{eng_name}</h1>
                    <small>{jap_name}</small>
                </div>
                <img className="img" src={url} />
                <div className="information">
                    <p>Pokidex entry: {index}</p>
                    <p>Primary type: {primary}</p>
                    <p>Secondary type: {Secondary}</p>
                    <p>Evolve into: {evolve_into}</p>
                </div>
            </div>
        )
    }
}