import {test} from "vitest";
import {randomPassword} from "../src";

test('test', () => {
    const result = randomPassword(16,'strong');
    console.log(result)
})