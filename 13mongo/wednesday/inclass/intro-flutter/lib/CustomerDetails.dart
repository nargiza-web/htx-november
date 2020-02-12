
import 'package:flutter/material.dart';

class CustomerDetails extends StatelessWidget {

  final String name; 

  CustomerDetails({this.name});

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text("Customer Details")
      ),
      body: Center(child: Text(name, style: TextStyle(fontSize: 50)))
    );
    
  }


}