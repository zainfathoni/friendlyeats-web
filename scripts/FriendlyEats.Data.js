/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

FriendlyEats.prototype.addRestaurant = function(data) {
  FriendlyEats.prototype.addRestaurant = function(data) {
    const collection = firebase.firestore().collection("restaurants");
    return collection.add(data);
  };
};

FriendlyEats.prototype.addRating = function(restaurantID, rating) {
  /*
    TODO: Retrieve add a rating to a resterant
  */
};

FriendlyEats.prototype.getRestaurant = function(id) {
  return firebase
    .firestore()
    .collection("restaurants")
    .doc(id)
    .get();
};

FriendlyEats.prototype.getAllRestaurants = function(render) {
  const query = firebase
    .firestore()
    .collection("restaurants")
    .orderBy("avgRating", "desc")
    .limit(50);
  return this.getDocumentsInQuery(query, render);
};

FriendlyEats.prototype.getFilteredRestaurants = function(filters, render) {
  /*
    TODO: Retrieve filtered list of restaurants
  */
};

FriendlyEats.prototype.getDocumentsInQuery = function(query, render) {
  query.onSnapshot(snapshot => {
    if (!snapshot.size) return render();

    snapshot.docChanges.forEach(change => {
      if (change.type === "added") {
        render(change.doc);
      }
    });
  });
};
