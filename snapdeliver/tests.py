'''
SFSU CSC 642 Summer 2020
Team 6
Test File by Cameron Gao

tests.py
This Selenium app will test the core user flow as defined within our Testing Documentation doc
'''

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()
driver.get("http://localhost:3000")

print('Testing SnapDeli website in Firefox')

print('Testing Homepage')
assert "Popular Places Near SFSU" in driver.page_source
login = driver.find_element_by_link_text('Login')
login.click()

print('Testing Login')
assert "Email Address" in driver.page_source
driver.get("http://localhost:3000")

assert "Popular Places Near SFSU" in driver.page_source
find = driver.find_element_by_link_text('Find')
find.click()

print('Testing Search')
assert "miles from SFSU" in driver.page_source
go = driver.find_element_by_link_text('Go')
go.click()

print('Testing Restaraunt Menu')
assert "Add to cart" in driver.page_source
order_now = driver.find_element_by_link_text('Order Now')
order_now.click()

assert "Payment Method" in driver.page_source
# order = driver.find_element_by_link_text('Order')
# order.click()

# assert "Order Confirmation" in driver.page_source

driver.close()
print('All Tests Successful')