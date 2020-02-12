import 'package:flutter/material.dart';
import 'package:hello_flutter/CustomerDetails.dart';

void main() => runApp(App());

class App extends StatelessWidget {

  final customers = ["Alex","Mary","John","Steven"];

  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      title: "Customers", 
      home: Scaffold(
        appBar: AppBar(
          title: Text("List of Customers"),
        ),
        body: ListView.builder(
          itemCount: customers.length,
          itemBuilder: (context, index) {
            return ListTile(
              onTap: () {

                Navigator.push(context, MaterialPageRoute(builder: (context){
                  return CustomerDetails(name: customers[index]); 
                }));

                print("${customers[index]}");
              },
              leading: Icon(Icons.people),
              title: Text(customers[index], style: TextStyle(fontSize: 32)), 
              trailing: Text("DigitalCrafts"),
            );
          }
        )
      )
    );
    
  }

}