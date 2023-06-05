import {Component} from "react";

class FacilityList extends Component {
constructor() {
    super();
     this.facility = [
        {
            id : 1,
            name: 'Bơi lội',
            area: 100,
            cost: 50,
            maxPeople: 20,
            facilityType: {
                id: 2,
                name: 'Gold'
            },
            rentType:  {
                id: 1,
                name: 'VND'
            },
            standardRoom: 'Twin bedroom',
            description: 'Tốt',
            poolArea: 50,
            numberOfFloors: 3,
            facilityFree: "đồ bơi, kính bơi",
            status: false


        }
    ];

    this.facilityType = [
        {
            id: 1,
            name: 'Diamond'
        },
        {
            id: 2,
            name: 'Gold'
        },
        {
            id: 3,
            name: 'Silver'
        }
    ];

    this.rentType = [
        {
            id: 1,
            name: 'VND'
        },
        {
            id: 1,
            name: 'USD'
        }

    ]
}
    render() {
        return (
            <div className="row mx-0 mt-5" style={{height: 500}}>
                <div className="col-12 px-0">

                    <table className="table" id="tableService">
                        <thead>
                        <tr className="table-success">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Area</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Max People</th>
                            <th scope="col">Rent Style ID</th>
                            <th scope="col">Facility Type ID</th>
                            <th scope="col">Standard Room</th>
                            <th scope="col">Description</th>
                            <th scope="col">Pool Area</th>
                            <th scope="col">Number Of Floors</th>
                            <th scope="col">Facility Free</th>
                        </tr>
                        </thead>
                        <tbody align="center">
                        {this.facility.map((facilityList, index) =>

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{facilityList.name}</td>
                                <td>{facilityList.area}</td>
                                <td>{facilityList.cost}</td>
                                <td>{facilityList.maxPeople}</td>
                                <td>{facilityList.description}</td>
                                <td>{facilityList.poolArea}</td>
                                <td>{facilityList.numberOfFloors}</td>
                                <td>{facilityList.facilityFree}</td>
                                <td>{facilityList.rentType.name}</td>
                                <td>{facilityList.facilityType.name}</td>
                                <td><button style={{ color: "blue" }}>Edit</button></td>
                                <td><button style={{ color: "red" }}>Delete</button></td>
                            </tr>
                        )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default FacilityList;