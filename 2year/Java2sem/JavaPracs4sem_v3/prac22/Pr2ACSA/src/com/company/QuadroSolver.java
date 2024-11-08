package com.company;

import java.rmi.Remote;
import java.rmi.RemoteException;
import java.util.List;

public interface QuadroSolver extends Remote {
    List<Double> solve(double a, double b, double c) throws RemoteException;
}
