class Visitor {
    constructor(id, firstName, lastName, address, city, state, zip, phone, email, foundSite, notes){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.city = city
        this.state = state
        this.zip = zip
        this.phone = phone
        this.email = email
        this.foundSite = foundSite
        this.notes = notes
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    getAddress(){
        return `${this.address}\n${this.city}, ${this.state} ${this.zip}`
    }
    getId(){
        return `${this.id}`
    }
}

let visitors = [ 
    new Visitor(0,"Sample","Visitor One","1234 N. Cool Rd.","Cincinatti","Utah","84062","801-874-1244","samplevisitor1@gmail.com",{google:true,yahoo:false,friend:true}, "i hate your website"),
    new Visitor(1,"Sample","Visitor Two","Pinetree Apt #402","Ephraim","Utah","84027","801-333-2222","samplevisitor2@yahoo.com",{google:true,yahoo:false,friend:false}, "i love jazz"),
    new Visitor(2,"Sample","Visitor Three","892 University Ave.","Provo","Utah","84027","801-785-4543","samplevisitor3@outlook.com",{google:true,yahoo:false,friend:false}, "yert")
   ];

let visitorCounter = 2
let totalVisitors = visitorCounter + 1

function modelAddVisitor(visitor){
    visitorCounter += 1
    let newVisitor = new Visitor(visitorCounter, $("#firstName").val(), $("#lastName").val(), $("#address").val(), $("#city").val(), $("#state").val(), $("#zip").val(), $("#phone").val(), $("#email").val(), {}, $("#comments").val())
    console.log(newVisitor)
    visitors.push(newVisitor)
}

// function modelConfirmDelete(id) {

// }

function modelDeleteVisitor(id){
    let index = findVisitorIndex(id)
    visitors.splice(index, 1)
    renderTable("#visitorsContainer", visitors)
}

function findVisitorIndex(id){
    var i = 0
    for (let visitor of visitors) {
        if (visitor.getId() == id) {
            return i
        }
        i += 1
    }
    return -1
}

