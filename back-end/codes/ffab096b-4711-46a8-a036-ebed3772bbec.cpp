#include <bits/stdc++.h>
using namespace std;
void r(string s, int start, int end)
{
    while (start < end)
    {
        char temp = s[start]; 
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    } 
}     
int main() 
{
 int n;
 string s;
cin>>n;
 cin>>s;

 cout<<s<<n;
 return 0;
}