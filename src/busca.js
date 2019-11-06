class busca extends Component {
    constructor(props){
        super(props);
    
     this.state ={
        searchText: "",
        nivel:"",
        location:"", 
        myJob: []
                }
    
                this._busca = this._busca.bind(this);
                this.searchTextChanged = this.searchTextChanged.bind(this);
                this.locationChanged = this.locationChanged.bind(this);
                this.nivelChanged = this.nivelChanged.bind(this);
               
    } 


    searchTextChanged(event){
        this.setState({
            searchText: event.target.value
        });
    }

    locationChanged(event){
        this.setState({
            location: event.target.value
        });
    }

    nivelChanged(event){
        this.setstate({
            nivel: event.target.value
        });
    }

    _busca() {
        let jobsFiltrados = [];
        
        var result = this.state.jobs.filter(function(v, i) {
            return (v["title"].indexOf(this.state.searchText) > -1 || v["location"] == this.state.location);
          })
        }
}