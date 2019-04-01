import {edb,kdb }from "../models/fakedb";
import { contentSecurityPolicy } from "helmet";

export const homeControl = (req, res) => res.render('home');

export const problemControl = (req, res) => {
    let {id} = req.params;
    id = parseInt(id);
    let {solve} = req.query;
    solve = parseInt(solve);
    if (id === 1) solve = 0;
    console.log(solve);
    console.log(edb[id]);

    return res.render('problem', {
        id,
        solve,
        db: edb[id-1]
    })
}

export const problemSolve = (req, res) => {
    
    let {id, answer, solve} = req.query
    id = parseInt(id);
    solve = parseInt(solve);
    console.log(id, answer, solve);
    let isRight;
    
    console.log(kdb[id-2]);
    if (kdb[id-2] === answer) {
        solve = solve + 1;
        isRight = true;
        console.log(solve);
    } else {
        isRight = false;
    }
    console.log(solve);
    return res.render('result', {
        solve,
        id,
        isRight
    });
}