/** @odoo-module */
import { ListController } from "@web/views/list/list_controller";
import { registry } from '@web/core/registry';
import { listView } from '@web/views/list/list_view';

export class SaleListController extends ListController {
    // Your existing code here
	 

    async OnTestClick(ev) {
        
		const fromInput = document.getElementById("from").value;
        const toInput = document.getElementById("to").value;
		

        const from = new Date(fromInput);
        const to = new Date(toInput);
        to.setHours(23, 59, 59); // Set the time to the end of the day
		console.log("From:", fromInput);
		console.log("To:", to);
        // Fetch data from the date range
        const data = await this.rpc({
            model: "product.product",
            method: "search_read",
            domain: [
                ["create_date", ">=", from],
                ["create_date", "<=", to],
            ],
            fields: ["categ_id", "qty_available", "create_date"],
        });
		request.open("POST", "http://localhost:8069/api/test_new_api");

        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(data));
		consol.log("request.open()",request.open());

        // Process 'data' containing fetched data
        const filteredData = data.filter(item => {
            const itemDate = new Date(item.create_date);
            return itemDate >= from && itemDate <= to;
        });

        console.log(filteredData);
        this.displayDataInTreeView(filteredData);
    }
    displayDataInTreeView(data) {
		// Clear existing rows before appending new ones
		const tableBody = this.$('.o_list_table tbody');
		tableBody.empty();
			for (const record of data) {
				this.appendRow(record, tableBody);
			}
	}
	
	
	

	

	appendRow(record, tableBody) {
		// Create a new row and append it to the table body
		const row = document.createElement('tr');
		row.product.product = 'o_data_row';

		const categIdCell = document.createElement('td');
		categIdCell.textContent = record.categ_id[1];
		row.appendChild(categIdCell);

		const qtyAvailableCell = document.createElement('td');
		qtyAvailableCell.textContent = record.qty_available;
		row.appendChild(qtyAvailableCell);

		const createDateCell = document.createElement('td');
		createDateCell.textContent = record.create_date;
		row.appendChild(createDateCell);


		const incomingSourceCell = document.createElement('td');
		incomingSourceCell.textContent = incomingSources[record.incoming_source];
		row.appendChild(incomingSourceCell);

		const outgoingSourceCell = document.createElement('td');
		outgoingSourceCell.textContent = outgoingSources[record.outgoing_source];
		row.appendChild(outgoingSourceCell);

		tableBody.append(row);
		}

		// Your other methods here
}

registry.category("views").add("button_in_tree", {
    ...listView,
    Controller: SaleListController,
    buttonTemplate: "button_box.ListView.Buttons",
});
