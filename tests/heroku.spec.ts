import { test } from "@playwright/test";

test("send data and refresh table", async ({ page }) => {
    // Navigate to the target URL
    await page.goto(
        "https://testpages.herokuapp.com/styled/tag/dynamic-table.html"
    );

    // Click on the summary with the specified xpath to expand the table data section
    await page.click('//summary[normalize-space()="Table Data"]');

    // Enter the JSON data into the input field with id 'jsondata'
    const jsonData =
        '[{"name" : "Bob", "age" : 20, "gender": "male"}, {"name": "George", "age" : 42, "gender": "male"}, {"name": "Sara", "age" : 42, "gender": "female"}, {"name": "Conor", "age" : 40, "gender": "male"}, {"name": "Jennifer", "age" : 42, "gender": "female"}]';
    await page.fill("#jsondata", jsonData);

    // Click on the button with id 'refreshtable' to display the table
    await page.click("#refreshtable");
});
