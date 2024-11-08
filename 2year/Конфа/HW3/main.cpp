#include <iostream>
#include "header.h"

int main(){
    string somesig = "some strange signal";
    string storage;
    storage = emit_signal(somesig);
    print_signal(storage);
}