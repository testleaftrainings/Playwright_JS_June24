//Enums ->named constants

enum orderStatus{
    confirmed=1,
    pending=2,
    shipped=3,
    delivered=4,
    cancelled=5
}

let Status:orderStatus=
  orderStatus.cancelled;

  console.log(Status)


  enum admin{
    Hradmin="hradmin",
    ITadmin="itadmin",
    username="user"
  }

  let credentials1:admin=admin.ITadmin
  let credentials2:admin=admin.Hradmin
  let credentials3:admin=admin.username

