#include <iostream>
using namespace std;
 
bool subArrayExists(int arr[], int n)
{
    for (int i = 0; i < n; i++) {
        int sum = arr[i];
        if (sum == 0)
            return true;
        for (int j = i + 1; j < n; j++) {
            sum += arr[j];
            if (sum == 0)
                return true;
        }
    }
    return false;
}
int main()
{
  int t;
  cin>>t;
  while(t--){
   int N;
    cin>>N;
    int arr[N];
    for(int i=0;i<N;i++){
    cin>>arr[i];
    }
 
    // Function call
    if (subArrayExists(arr, N))
        cout << "YES"<<" ";
    else
        cout << "NO"<<" ";
   }
    return 0;
}