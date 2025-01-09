'use strict';

function calculateExpenses() {
    const salary = parseFloat(document.getElementById("salary").value) || 0;
    const rent = parseFloat(document.getElementById("rent").value) || 0;
    const groceries = parseFloat(document.getElementById("groceries").value) || 0;
    const utilities = parseFloat(document.getElementById("utilities").value) || 0;
    const phone = parseFloat(document.getElementById("phone").value) || 0;
    const transportation = parseFloat(document.getElementById("transportation").value) || 0;
    const entertainment = parseFloat(document.getElementById("entertainment").value) || 0;
    const savings = parseFloat(document.getElementById("savings").value) || 0;
    const subscriptions = parseFloat(document.getElementById("subscriptions").value) || 0;
    const debt = parseFloat(document.getElementById("debt").value) || 0;
    const miscellaneous = parseFloat(document.getElementById("miscellaneous").value) || 0;

    const totalExpenses = rent + groceries + utilities + phone + transportation + entertainment + savings + subscriptions + debt + miscellaneous;

    const remainingBalance = salary - totalExpenses;

    document.getElementById("totalExpenses").innerText = `£${totalExpenses.toFixed(2)}`;
    document.getElementById("remainingBalance").innerText = `£${remainingBalance.toFixed(2)}`;
}